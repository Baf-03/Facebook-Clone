import "./centersection.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp,faUser,faMessage,faShare} from '@fortawesome/free-solid-svg-icons'
import Cards from "./cards";

const CenterSection = () => {
  return (
    <>
      <section className="firstdiv mt-3">
      
        <div><FontAwesomeIcon icon={faUser} /></div>
        <div>
          <div>Create story</div>
          <div className="ajeeb">Share a photo or write something</div>
        </div>
    
      </section>

      
    <Cards
    card_name="Founder Of India Mahatma Ghandi"
    postedby="Sponsored"
    img="https://c.ndtvimg.com/2023-03/ts9dtkq8_selfies-from-the-past_625x300_21_March_23.jpg"
    comment="mujae kion nikala"/>
    <Cards
    card_name="AI tech World with sheezuka"
    postedby="learn with me"
    img="https://imageio.forbes.com/specials-images/imageserve/644c27a753797ad5a7ad4710/0x0.jpg?format=jpg&crop=2654,1492,x0,y48,safe&width=1200"
    comment="jo jo apne mama papa sae pyar krta hae like zaror krdae XD XDXXD"/>
    <Cards
    card_name="Gareebon ka THOMAS SHELBY"
    postedby="Haqeeqat Tv"
    img="https://cdn.pixabay.com/photo/2023/07/05/19/48/ai-generated-8109103_1280.jpg"
    comment="wow so Cool"/>
    <Cards
    card_name="Ducky Bahi bought new car worth of Rs 5crore "
    postedby="is liyae kehta hon parh lo kuch"
    img="https://propakistani.pk/wp-content/uploads/2021/03/1-3-e1615977740922.jpg"
    comment="mujae kion nikala"/>
    <Cards
    card_name="Pakistan will look like this in few years XDDD"
    postedby="not me"
    img="https://www.designboom.com/wp-content/dbsub/451081/2022-08-18/visualizing-futuristic-utopian-cities-with-ai-11-62fe19df37e83.jpg"
    comment="mujae kion nikala"/>
     
    </>
  );
};
export default CenterSection;
