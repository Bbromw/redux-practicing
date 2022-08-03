import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import Poster1 from '../../images/t1.jpg'
import Poster2 from '../../images/t2.jpg'
import Poster3 from '../../images/t3.jpg'
import Poster4 from '../../images/t4.jpg'
import BGDemo from '../../images/bg_demo.jpg'
import { movieDetailAction } from '../../store'
import "boxicons"
import PlayButton from '../composites/PlayButton'
import VideoTrailer from '../../images/Transformers The Last Knight – Trailer (2017) Official – Paramount Pictures.mp4'

const DetailsPage = () => {
  const [translateX, setTranslateX] = useState(0)
  const [silde, setSlide] = useState(1)
  const [wList, setWlist] = useState([])

  const { movie } = useSelector((state) => state.movieDetailReducer)
  const dispatch = useDispatch()
  const { id } = useParams()
  const bgFill = {
    // backgroundImage: "url(" + BGDemo + ")",
    width: "100%",
    minHeight: "100vh",
    // backgroundSize: "cover"
  }
  const imgSlide = [
    { id: 1, link: Poster1 },
    { id: 2, link: Poster2 },
    { id: 3, link: Poster3 },
    { id: 4, link: Poster4 },
  ]
  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetailThunk(id))
    return () => {
      dispatch(movieDetailAction.freshMovieDetail())
    }
  }, [dispatch, id])

  const runSlide = (option) => {
    if (option === "prev") {
      setSlide((prev) => prev - 1)
      setTranslateX(translateX + 25)
      return
    }
    if (option === "next") {
      setSlide((prev) => prev + 1)
      setTranslateX(translateX + -25)
      return
    }
  }

  useEffect(() => {
    if (movie.Writer?.indexOf(',') > -1) {
      let list = movie.Writer.split(", ")
      setWlist(list)
    } else {
      setWlist([movie.Writer])
    }
  }, [movie.Writer])

  return (
    <section className='movie-details' style={bgFill}>
      <video src={VideoTrailer} muted autoplay="autoplay" loop="loop" >
        <source src={VideoTrailer} type="video/mp4" />
      </video>
      <PlayButton />
      <div className='overlay'></div>
      <LeftDetail movie={movie} />
      <RightDetail
        runSlide={runSlide}
        translateX={translateX}
        imgSlide={imgSlide}
        silde={silde}
        movie={movie}
        wList={wList}
        history
      />
    </section>
  )
}

export default DetailsPage

const LeftDetail = ({ movie }) => {
  return (
    <div className='left-dtls'>
      {/* <div className='big-title'>{movie.Title}</div> */}
      <div className='big-title'>Transformers: The Last Knight</div>
      <p className='is-theater'>In Theaters</p>
      <div className='timeline'>
        <span className='timeline-month'>october</span>
        <span className='timeline-year'>{movie.Year}</span>
      </div>
      <div className='ticket'>
        <span className='ticket-infors'>Find your theaters by the location <br /> and books the ticket</span>
        <button className='ticket-action'>
          tickets
        </button>
      </div>
    </div>
  )
}
const RightDetail = ({ runSlide, translateX, imgSlide, silde, movie, wList }) => {
  const history = useHistory()
  return (
    <div className='right-dtls'>
      <section className='app-header-v2' onClick={() => history.push("/")}>
        <span></span>
        <span></span>
      </section>
      <div className='direc'>
        <p className='direc--starring'>Starring</p>
        <span className='direc--visual-name'>Director: {movie.Director}</span>
        {/* <span className='direc--visual-name'>{movie.Writer}</span> */}
        {wList.map((w, i) => <span key={i} className='direc--visual-name'>{w}</span>)}
        <button className='direc--btn'>MORE</button>
      </div>
      <div className='dtls-slider'>
        <SliderControls runSlide={runSlide} silde={silde} imgSlide={imgSlide} />
        <div className='slider-wrapper'>
          <div className='wrapper' style={{ transform: "translateX(" + translateX + "%)" }}>
            {imgSlide.map(img => {
              return (
                <SliderCard key={img.id} image={img.link} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
const SliderControls = ({ runSlide, silde, imgSlide }) => {
  return (
    <div className='controller'>
      <div className='ctrl-chevon'>
        <div onClick={() => runSlide("prev")} style={{ pointerEvents: silde === 1 ? "none" : "unset" }} >
          <box-icon name='chevron-left'></box-icon>
        </div>
        <div onClick={() => runSlide("next")} style={{ pointerEvents: silde >= imgSlide.length ? "none" : "unset" }}>
          <box-icon name='chevron-right'></box-icon>
        </div>
      </div><div className='ctrl-dots'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

const SliderCard = ({ image }) => {
  return (
    <div className='slider-card'>
      <img src={image} alt="Transformer" />
    </div>
  )
}
