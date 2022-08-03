import React from "react"
import "./newdetail.scss"
import sense1 from "../../images/t1.jpg"
import sense2 from "../../images/t2.jpg"
import sense3 from "../../images/t3.jpg"
import sense4 from "../../images/t4.jpg"

const NewDetail = () => {
  return (
    <div className="new-detail">
      <div className="overlay"></div>
      <div className="main">
        <div className="title">TRANSFORMERS: THE LAST KNIGHT</div>
        <div className="plot">
          In 2035, a technophobic cop investigates a crime that may have been
          perpetrated by a robot, which leads to a larger threat to humanity.
        </div>
        <div className="senses">
          <div className="sense">
            <img className="sense-picture" src={sense1} />
          </div>
          <div className="sense">
            <img className="sense-picture" src={sense2} />
          </div>
          <div className="icon-container">
            <i className="icon fa fa-play-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="stats">
        <div>Language: English</div>
        <div>Runtime: 180'</div>
        <div>Star: 4.5</div>
      </div>

      <div className="info">
        <div>Place: London, Paris, Viet Nam</div>
        <div>Actor: Will Smith, Bridget Moynahan, Bruce Greenwood</div>
        <div>Award: Nominated for 1 Oscar. 1 win and 15 nominations total</div>
      </div>
    </div>
  )
}

export default NewDetail
