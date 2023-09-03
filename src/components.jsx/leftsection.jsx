import "./leftsection.css";
import personimg from "../assets/person.png"
import groups from "../assets/groups.png"
import timer from "../assets/timer.png"
import bookmark from "../assets/bookmark.png"
import stats from "../assets/stats.png"
import stock from "../assets/stock.png"
import marketplace from "../assets/marketplace.png"
import power from "../assets/power.png"
import tv from "../assets/tv.png"





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserGroup,faClock,faPeopleGroup,faBookmark} from '@fortawesome/free-solid-svg-icons'


const LeftSection =()=>{

    return(
        <>
        <div className="parentleftsection">
            <div className="element">
                <img src={personimg} className="imgperson"/>bilal</div>
            <div className="element">
             <img src={groups} className="imgperson"/>Groups</div>

             <div className="element">
             <img src={timer} className="imgperson"/>Memory</div>

             <div className="element">
             <img src={bookmark} className="imgperson"/>Bookmarks</div>

             <div className="element">
             <img src={stats} className="imgperson"/>Ads Manager</div>

             <div className="element">
             <img src={stock} className="imgperson"/>Feeds</div>

             <div className="element">
             <img src={marketplace} className="imgperson"/>Marketplace</div>

             <div className="element">
             <img src={power} className="imgperson"/>Marketplace</div>

             <div className="element">
             <img src={tv} className="imgperson"/>Video</div>
            {/* <div className="element">
            <span className="fontsize"><FontAwesomeIcon icon={faClock} /></span>Memories</div> */}

            {/* <div className="element">
            <span className="fontsize"><FontAwesomeIcon icon={faBookmark} /> </span>Find Friends</div>
            <div className="element">
            <span className="fontsize"><FontAwesomeIcon icon={faUserGroup} /></span>Find Friends</div>
            <div className="element">
            <span className="fontsize"><FontAwesomeIcon icon={faUserGroup} /></span>Find Friends</div>
            <div className="element">
            <span className="fontsize"><FontAwesomeIcon icon={faUserGroup} /></span>Find Friends</div>
            <div className="element">
            <span className="fontsize"><FontAwesomeIcon icon={faUserGroup} /></span>Find Friends</div> */}
        </div>
        </>
    )
}
export default LeftSection
