import React, { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";

const Card = ()=> {
    const [showArticles,setShowArticles] = useState(false)
    const showMore = ()=> {
        setShowArticles(true)
    }
    const hideMore = ()=> {
        setShowArticles(false)
    }
    return(
     <div className="wrapper">
        <div className="icon-wrapper">
            <div>
        <h4>Why park a domain name in Parkname ?</h4>
        <p>4 Articles in this topic</p>
         </div>
        <MdOutlineExpandMore id="icon" className={showArticles ? 'rotate' : ""} onClick={showArticles ? hideMore : showMore}/>
        
        </div>
        
        
        {showArticles ?
        <div className="icon-wrapper">
        <p>How does Parkname seperate itself from other domain name parking companies</p>
        <MdOutlineExpandMore id="icon" className={!showArticles ? 'rotate':'right'} onClick={!showArticles ? hideMore : showMore}/>
        
        </div>
        : null}
        
     </div>
   )
}
export default Card