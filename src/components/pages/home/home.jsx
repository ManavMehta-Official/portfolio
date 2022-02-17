import React from 'react';
import './home.css';
import philosophy from '../../../images/design-philosophy.png';
import imgHolder from '../../../images/img-holder.jpeg';
import imgHolder1 from '../../../images/img-holder1.jpeg';
import { BsArrowRight } from "react-icons/bs";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function index() {

  return (
    <div>
      <div className='home-container'>

        <div className="row">
          <div className="col-sm-6" style={{"margin-top": "18%" }}>
            <h1 className='home-title'>Front-end Developer & UI/UX Designer.</h1>
            <button className='grey-btn' style={{"margin-top": "5%", "margin-right": "2%"}}>View work</button>
            <button className='mustard-btn' style={{"margin-top": "5%"}}>Contact me</button>
          </div>
          <div className="col-sm-6">
            <div className='about-holder'>
              <h1 className='about-title'>About me</h1>
              <p style={{"padding": "2% 5%", "color": "white", "font-size": "1.2rem", "text-align": "left"}} className="aboutme-text">
              Hey! My name is Manav Mehta. I am a front-end developer specialising in UI and UX Design. I have worked on numerous projects and have accumulated a lot of experience and knowledge from these projects. In my journey as a front-end developer, I have understood the importance of communication between the client and the developer and by enhancing this communication,  I have been able to create amazingly creative and interactive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="work-short" style={{"margin-top": "16%"}}>
          <h1 className='text-center work-title'>A few of my projects.</h1>
        <div className="row" style={{"margin-top": "5%"}}>

          <div className="col-sm-6" style={{"textAlign": "center"}}>
            <img src={imgHolder} alt="work projects" className='img-fluid' style={{"width": "65%"}} />
            <h1 className='template-title'>SOME TEMPLATE</h1>
            <h1 className="project-name">VERTICAL SITE</h1>
          </div>
          <div className="col-sm-6">
            <img src={imgHolder1} alt="work projects" className='img-fluid' style={{"width": "100%", "margin-top": "15%"}}/>
            <h1 className='template-title'>SOME TEMPLATE</h1>
            <h1 className="project-name">HORIZONTAL SITE</h1>

            <div className="text-center" style={{"margin-top": "15%"}}>
            <button className='project-solid'>VIEW ALL PROJECTS <BsArrowRight /></button>
            </div>
            
          </div>

        </div>
        </div>

        <div className="row">

          <div className="col-sm-6 border-holder" style={{"margin-top": "15%"}}>
          </div>
          <div className="col-sm-6">

          </div>

        </div>

        {/* <img src={borderHR} alt="Horizontal Border" className='borderHR' style={{"margin-top": "5%"}} /> */}


        <div className='row'>

          <div className="col-sm-6">
            <img src={philosophy} alt="philosophy" className='philosophy img-fluid' />
          </div>
          <div className="col-sm-6">
            <h1 className='sub-title' style={{"margin-top": "15%"}}>Design Philosophy</h1>

            <p className='description' data-aos="fade" data-aos-duration="800">
              As designers, our goal is not to eliminate the complexity, but rather create a clear, concise, intuitive and understandable product and user experience.
            </p>
            <p className="description" data-aos="fade" data-aos-duration="1000">
            More than millions of websites exist on the internet today. But the question is - <mark>"How do we make our product stand out?".</mark> To make any website stand out and look the most creative out of the lot I do not make the website just based on the content and design provided, but I aim at how to portray the core philosophy of the company through simple code.
            </p>
            <p className="description" data-aos="fade" data-aos-duration="1200">
            The idea is to create a simplistic website that catches the users eye and keeps the user engaged and intrigued to explore more about the website.
            <mark>First impression is the last impression!</mark> Not only designing but user experience also plays a big role in the making. Keeping the app user friendly is the key to making a memorable, simplistic and easy to use website.
            </p>
          </div>
            
        </div>

        <div className="row">

          <div className="col-sm-6">

          </div>
          <div className="col-sm-6 border-holder" style={{"margin-top": "5%"}}>

          </div>

        </div>

        </div>

        <div className="">
          <div className="row" style={{"background-color": "rgb(245 157 66)", "height": "20vh", "margin-top": "10%"}}>

          </div>
        </div>

        <div className="why" style={{"padding": "5% 2%"}}>
          <div className="row">

            <div className="col-sm-6">
              <h1 className='why-title'>What makes me unique?</h1>
            </div>
            <div className="col-sm-6">

              <hr />
              <h1 className='number'>01</h1>
              <h3 className='reason'>Communication & trust is my core principle.</h3>
              <p data-aos="fade" data-aos-duration="1000">
              Your website needs to bring results and its design must be built on a solid user experience. Otherwise, its aesthetic is an end in itself. For this reason, we craft digital experiences that are human-centered: it means bringing your business to success while leaving users with a big smile
              </p>
              <hr />
              <h1 className='number'>02</h1>
              <h3 className='reason'>We create websites that people love to use.</h3>
              <p data-aos="fade" data-aos-duration="1200">
              Your website needs to bring results and its design must be built on a solid user experience. Otherwise, its aesthetic is an end in itself. For this reason, we craft digital experiences that are human-centered: it means bringing your business to success while leaving users with a big smile
              </p>
              <hr />
              <h1 className='number'>03</h1>
              <h3 className='reason'>You get the tools to easily manage your website.</h3>
              <p data-aos="fade" data-aos-duration="1400">
              Your website needs to bring results and its design must be built on a solid user experience. Otherwise, its aesthetic is an end in itself. For this reason, we craft digital experiences that are human-centered: it means bringing your business to success while leaving users with a big smile
              </p>
              <hr />

            </div>

          </div>
        </div>

        <div className="home-container">

        <div className="collab mx-auto text-center" style={{"margin-top": "5%"}}>
          <h1 className='collab-title'>Want to work <br /> with me?</h1>
          <h2 className='collab-sub-title' style={{"margin-top": "2%"}}>Let's create a great user-experience together.</h2>
          <button className='collab-outline'>LET'S COLLABORATE</button>
        </div>
        
        </div>
    </div>
  )
}

