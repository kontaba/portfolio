import React from 'react';
import {connect} from 'react-redux';
import './about.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {FaFilePdf} from 'react-icons/fa';

const About = (props) => {

    let text;

    props.language === 'french' ?

    text = (
        <div className="introduction">
            <p className="firstP"
                // style={{ textAlign: 'center', fontSize: 22, marginBottom: 35}}
            >Bonjour, je m'appelle Cantin</p>

            <p>Junior web développeur de 29 ans, passionné, enthousiaste et désireux d'apprendre.</p>
            
            <p>J'ai découvert le monde du code il y a maintenant presque deux ans,  dans un premier 
                temps en autodidacte et par la suite en me formant à <b>La Capsule de Lyon</b>.</p>
            
            <p>J'aimerai continuer l'aventure et avoir la chance de parfaire mes connaissances tout 
                en gagnant de l'expérience professionnelle.</p>
            
            <p>Actuellement à la <b>Wild Code School</b>, je recherche une entreprise sur Lyon ou Paris 
                pour y effectuer une alternance (en contrat d'apprentissage) qui débutera à partir du <b>14/09/2021</b> 
                jusqu'au <b>13/09/2022</b>.</p>
                
        </div> 
    )

    :
    text = (
        <div className="introduction">
            <p className="firstP"
                // style={{ textAlign: 'center', fontSize: 22, marginBottom: 35}}
            >Hello, My name is Cantin</p>
            <p>As a keen, 29 year old Junior Web Developer, I am enthusiastic and motivated young person, 
                willing to learn new skills.</p>
            <p>I discovered Code almost 2 years ago,
                at first as a self-learner, then I enrolled a bootcamp in Lyon France called <b>La Capsule</b>.
                It was an amazing experience.</p>
            <p>Now I'd like to continue the adventure as an apprentice in order to get the chance to accumulate more knowledge 
                and be able to gain some real work experience at the same time.
            </p>
            <p>I am currently at the <b>Wild Code School</b> and looking for a company based in Lyon or Paris where I could 
                undertake an apprenticeship from <b>09/14/201</b> untill <b>09/13/2022</b>.</p>
        </div>
    );

    const links = (
        <div className="resume">
                <a 
                    className="icon"
                    href="https://www.linkedin.com/in/cantin-bartel/" 
                    target="_blank" rel="noreferrer"
                >
                    <LinkedInIcon style={{ fontSize: 55 }}/>
                </a>
                <a 
                    className="icon"
                    href="https://github.com/kontaba" 
                    target="_blank" rel="noreferrer"
                >
                    <GitHubIcon style={{ fontSize: 47 }}/>
                </a>
                <a 
                    className="icon"
                    href="assets/resume_fr.pdf" 
                    target="_blank"
                >
                    <FaFilePdf style={{ fontSize: 45 }}/>
                </a>
        </div>
    )
    // color: 'hsl(342, 87%, 58%)'

    return (
        <div className="about" id="about">
            {text}
            {links}
        </div>
        
    )
}

//get global states function
function mapStateToProps(state) {
    return { 
      language: state.language 
    }
  }
  
//Connection
export default connect(
mapStateToProps, 
null
)(About);
