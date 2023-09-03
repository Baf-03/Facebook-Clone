import "./centersection.css";
// import img from "../assets/product3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faUser,
  faMessage,
  faShare,
  faFaceSmile,
  faUserTie,
  faCamera,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import personimg from "../assets/person.png"

import "./cards.css";
import { useState } from "react";
const Cards = (props) => {
  let { card_name, postedby, comment ,img} = props;
  console.log(card_name);
  let [getclass, setclass] = useState("comment_section");

  const clickHandler = () => {
    setclass("chutti kar");
  };

  return (
    <div className="card realcard mt-5">
      <section className="firstdiv ">
        <div>
        <img src={personimg} className="imgperson1"/>

        </div>

        <div>
          <div>{card_name}</div>
          <div className="ajeeb">{postedby}</div>
        </div>
      </section>

      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <section className="d-flex justify-content-between">
          <div className="likes cursor-pointer btn text-primary">
            <FontAwesomeIcon icon={faThumbsUp} /> <span>4</span>
          </div>
          <div className="comments">2 comments</div>
        </section>
        <div className="line"></div>
        <div className="d-flex justify-content-around mt-2">
          <div className="btn text-light">
            <FontAwesomeIcon icon={faThumbsUp} />
            like
          </div>
          <div className="btn text-light ">
            <FontAwesomeIcon icon={faMessage} /> Comment
          </div>
          <div className="btn text-light">
            <FontAwesomeIcon icon={faShare} /> Share
          </div>
        </div>
        <div className="line mb-4 mt-1"></div>

        <div className="d-flex align-items-center ">
        <img src={personimg} className="col-0 rounded-circle"/>

          <div className="colordiv" onClick={clickHandler}>
            <section className={getclass}>
              <div className="d-flex justify-content-start">
                {" "}
                <input
                  className="comment_input "
                  placeholder="Write an answer..."
                />
              </div>
              <div className="d-flex justify-content-between gap-2">
                <div>
                  <FontAwesomeIcon icon={faUserTie} className="p-1" />
                  <FontAwesomeIcon icon={faCamera} className="p-1" />
                  <FontAwesomeIcon icon={faFaceSmile} className="p-1" />
                </div>
                <div>
                  <FontAwesomeIcon icon={faPaperPlane} className="p-1" />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="fakecomment mt-5">
          <h5>Comments</h5>
          <img src={personimg} className="imgperson"/>

          {comment}
        </div>
      </div>
    </div>
  );
};

export default Cards;
