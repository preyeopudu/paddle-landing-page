import React from 'react';
import '../styles/List.css';

const List =(props)=>{
    return(
        <div>
             <div className='list-container'> 
                  <div>
                    <img src={props.image} alt="List Icon" className='list-img' />
                  </div>
                  <div className='content-container'>
                    <p className="list-content">{props.children}</p>
                  </div>
                  
                </div>
        </div>
    )
}

export default List