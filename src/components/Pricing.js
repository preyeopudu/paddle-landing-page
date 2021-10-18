import React from 'react';
import '../styles/Pricing.css';
import PriceCard from './PriceCard'
import Pricing1 from '../images/pricing1.png'
import Pricing2 from '../images/pricing2.png'
import Pricing3 from '../images/pricing3.png'

function Pricing() {
  return (
    
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
            <div style={{textAlign:'center',width:'100%'}}>
                <h1 className='pricing__heading'>Choose Your Plan</h1>
                <p className='pricing__text'>Let's choose the package that is best for you and explore it happily and <br/>cheerfully.</p>
            </div>
          <div className='pricing__container'>
                <PriceCard image={Pricing3} title={'Free Plan'} price='Free'/>
                <PriceCard image={Pricing2} title={'Standard Plan'} price='$9/ mo'/>
                <PriceCard image={Pricing1} title={'Premium Plan'} price='$12/ mo' active={true}/>          
          </div>
        </div>
      </div>
  
  );
}
export default Pricing;