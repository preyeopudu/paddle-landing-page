import React from "react";
import { Button } from "../../components/Button";
import '../../styles/partners.css'
import Amazon from '../../images/amazon.png'
import Discord from '../../images/discord.png'
import Spotify from '../../images/spotify.png'
import Reddit from '../../images/reddit.png'
import Netflix from '../../images/netflix.png'


const  PartnersPage=()=>{
    return(
        <div className='partners__container'>
            <h1 className="partners__heading">Get Started With <br/> Paddle Today.</h1>
            <p className='partners__content'>Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante <br/>egestas ullamcorper</p>
            <Button buttonSize='btn--wide' >
                 Start Today
            </Button>

            <div className='sponsors__container'>
                    <img src={Netflix} alt="amazon" className='sponsors__image' />
                    <img src={Reddit} alt="reddit" className='sponsors__image' />
                    <img src={Amazon} alt="amazon" className='sponsors__image' />
                    <img src={Discord} alt="discord" className='sponsors__image' />
                    <img src={Spotify} alt="spotify" className='sponsors__image' />
            </div>

        
        </div>
    )
}

export default PartnersPage