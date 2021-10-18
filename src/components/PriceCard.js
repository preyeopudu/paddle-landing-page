import React from 'react';
import { Button } from './Button';
import '../styles/Pricing.css';
import { Link } from 'react-router-dom';
import Tick from '../images/tick.png'
import List from './List';


function PriceCard({
    title,
    price,
    image,
    active
  }) {
    return(
        <Link to='/sign-up' className={active?'pricing__container-card actives' : 'pricing__container-card'}>
        <div className='pricing__container-cardInfo'>
          <div className='icon'>
            <img src={image} alt="pricing1"/>
          </div>
          <h3 className='description'>{title}</h3>


          <ul className='pricing__container-features'>
            <List image={Tick}>Mauris sem neque</List>
            <List image={Tick}>Mauris sem neque</List>
            <List image={Tick}>Mauris sem neque</List>
            <List image={Tick}>Mauris sem neque</List>
            <List image={Tick}>Mauris sem neque</List>
          </ul>

        <div className="pricing__footer">

          <h3 className='price-text'>{price}</h3>
          <Button buttonSize='btn--wide' buttonStyle={active ? '' : 'btn-outline2'}>
            Select
          </Button>

        </div>
        </div>
      </Link>
    )
}


export default PriceCard