import React from "react";
import '../styles/StatCard.css'


const StatCard=(props)=>{
    return(
        <div class="flex-container">

        <div class="flex-child">
          <img src={props.image} className="stat__image" alt='Stastics'/>
        </div>
        
        <div class="flex-child right">
            <p className='number'>{props.number}+</p>
            <p className='title'>{props.title}</p>
        </div>
        
      </div>
    )
}

export default StatCard