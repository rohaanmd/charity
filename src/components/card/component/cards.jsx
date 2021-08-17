import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default function Cards(props) {
    return (
        <div className="card cuystom-card-2" style={{width:"18rem"}}>
          <img src={props.link} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title text-secondary">{props.title}</h5>
  
    <p className="card-text text-secondary">{props.des}</p>
    
    <ProgressBar labelColor="#000"  padding={"2"} completed={props.val} bgColor={"#f5f5f5"} baseBgColor={"#ea9822"} />
  

  </div>
</div>
    )
}
