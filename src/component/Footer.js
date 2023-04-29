import React, { Component } from 'react';
import { faGithub, faFacebook, faTwitter, faInstagram, faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style/footer.css';

const github = <FontAwesomeIcon icon={faGithub} />;
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const Twitter= <FontAwesomeIcon icon={faTwitter} />;
const instagram = <FontAwesomeIcon icon ={faInstagram} />
const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />


export default class Footer extends Component {
    
  render() {
    return (
        <div>
        </div>
    )
  }
}
