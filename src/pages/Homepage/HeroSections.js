import React from 'react';
import '../../styles/HeroSection.css';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import Developer from '../../images/developer.png'
import Keyboard from '../../images/keyboard.png'
import Rectangle from '../../images/rectangle.png'
import List from '../../components/List'


export const About = ()=>{
  return (
    <>
      <div>
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: ''
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <h1 className='heading dark' style={{textShadow:'0px 2px 4px #BA55D3'}}>
                  We Are Everything You Aspire To Be
                </h1>
                <p
                  className='home__hero-subtitle'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci condimentum lectus efficitur tempor vel eu massa. Sed molestie turpis eget ipsum malesuada dignissim
                </p>
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' >
                    Getting Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={Developer} alt='Web developer'  className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export const Features = ()=>{
  return (
    <>
      <div>
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <h1 className='heading dark' >
                  Features we provide for you
                </h1>
                <p
                  className='home__hero-subtitle'>
                  Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero eu sem finibus lacinia nec pulvinar.
                </p>
                <div className="hero__list">
                    <List image={Rectangle}>Curabitur tempor justo</List>
                    <List image={Rectangle}>Curabitur tempor justo</List>
                    <List image={Rectangle}>Curabitur tempor justo</List>
                    <List image={Rectangle}>Curabitur tempor justo</List>
                </div>
                


              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={Keyboard} alt='Web developer' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

