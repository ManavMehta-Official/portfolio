import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function footer() {
  return (
    <div className='footer'>
        <div className="row">

            <div className="col-sm-4">
                <h1 className='footer-brand'>Manav <br /> Mehta</h1>
            </div>
            <div className="col-sm-4">
                <h2 className='footer-topic'>About</h2>
                <p>
                Helping you create a creative, interactive and simplistic website. Helping you bring out the core philosophy of the brand through simple code.<br />
                </p>
            </div>
            <div className="col-sm-4 mx-auto" style={{"margin-left": "15% !important"}}>
                <div style={{"margin-left": "40%"}} className="aligner">
                    <h2 className='footer-topic'>Socials</h2>
                    <a href="https://" className='social-link'><FontAwesomeIcon icon={faTwitter} fixedWidth /> Twitter</a> <br />
                    <a href="https://" className='social-link'><FontAwesomeIcon icon={faInstagram} fixedWidth /> Instagram</a> <br />
                    <a href="https://" className='social-link'><FontAwesomeIcon icon={faYoutube} fixedWidth /> YouTube</a> <br />
                    <a href="https://" className='social-link'><FontAwesomeIcon icon={faGithub} fixedWidth /> Github</a> <br />
                    {/* <p><FontAwesomeIcon className='social-link' icon={faPaperPlane} style={{"color": "rgb(58, 36, 8)"}} /> manavmehta.official@gmail.com</p> */}
                </div>
            </div>

            <p className='copyright text-center'>&copy; Copyright 2022 Manav Mehta.</p>

        </div>
        
    </div>
  )
}
