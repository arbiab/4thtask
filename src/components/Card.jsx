import React, { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import Paragraph from "./Paragraph";
import { FaRegCircleUser } from "react-icons/fa6";
const Card = ()=> {
    const [showArticles,setShowArticles] = useState(false)
    const [showParagraph,setShowParagraph] = useState(false)
    const [showParagraph2,setShowParagraph2] = useState(false)
    const [showParagraph3,setShowParagraph3] = useState(false)
    const [showParagraph4,setShowParagraph4] = useState(false)
    const showMore = ()=> {
        setShowArticles(true)
    }
    const hideMore = ()=> {
        setShowArticles(false)
    }
    const showParagraphs = ()=>{
        setShowParagraph(true)
    }
    const hideParagraphs = ()=>{
        setShowParagraph(false)
    }
    const showParagraphs2 = ()=>{
        setShowParagraph2(true)
    }
    const hideParagraphs2 = ()=>{
        setShowParagraph2(false)
    }
    const showParagraphs3 = ()=>{
        setShowParagraph3(true)
    }
    const hideParagraphs3 = ()=>{
        setShowParagraph3(false)
    }
    const showParagraphs4 = ()=>{
        setShowParagraph4(true)
    }
    const hideParagraphs4 = ()=>{
        setShowParagraph4(false)
    }
    
    return(
     <div className="wrapper">
        <div className="icon-wrapper">
            <div>
            <div className="header">
          <FaRegCircleUser />
          <h2>About US</h2>
        </div>
        <p>4 Articles in this topic</p>
         </div>
        <MdOutlineExpandMore id="icon" className={showArticles ? 'rotate' : ""} onClick={showArticles ? hideMore : showMore}/>
        </div>
        {showArticles ?
        <div>
        <div className={showParagraph ? 'icon-wrapper-noBorder':'icon-wrapper'} >
        <p >How does Parkname seperate itself from other domain name parking companies</p>
        <MdOutlineExpandMore id="icon" className={showParagraph ? 'rotate':'right'} onClick={showParagraph ? hideParagraphs : showParagraphs}/>
        </div>
        {showParagraph ?<Paragraph />: null}
        <div className={showParagraph2 ? 'icon-wrapper-noBorder':'icon-wrapper'}>
        <p>Is Parkname Parking actually free</p>
        <MdOutlineExpandMore id="icon" className={showParagraph2 ? 'rotate':'right'} onClick={showParagraph2 ? hideParagraphs2 : showParagraphs2}/>
        </div>
        {showParagraph2 ?<Paragraph />: null}
        <div className={showParagraph3 ? 'icon-wrapper-noBorder':'icon-wrapper'}>
        <p>What you do?</p>
        <MdOutlineExpandMore id="icon" className={showParagraph3 ? 'rotate':'right'} onClick={showParagraph3 ? hideParagraphs3 : showParagraphs3}/>
        </div>
        {showParagraph3 ?<Paragraph />: null}
        <div className={showParagraph4 ? 'icon-wrapper-noBorder':'icon-wrapper'}>
        <p>What was Parkname first founded</p>
        <MdOutlineExpandMore id="icon" className={showParagraph4 ? 'rotate':'right'} onClick={showParagraph4 ? hideParagraphs4 : showParagraphs4}/>
        </div>
        {showParagraph4 ?<Paragraph />: null}
        </div>
        
        : null}
        
     </div>
   )
}
export default Card