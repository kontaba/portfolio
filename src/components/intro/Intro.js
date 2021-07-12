import React, { useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import './intro.scss';
import { init } from 'ityped'


const Intro = (props) => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 40, 
            strings: ['Web Developer', 'Mobile App Developer' ] 
        })
    }, []);

    let text;

    props.language === 'french' ?

        text =  (

            <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/cantin_pic.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Bonjour, je suis</h2>
                    <h1>Cantin Bartel</h1>
                    <h3>Junior <span ref={textRef}></span></h3>
                    <h3>à la recherche d'une alternance</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>

        ) :

        text = (

            <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/cantin_pic.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Cantin Bartel</h1>
                    <h3>Junior <span ref={textRef}></span></h3>
                    <h3>Looking for an apprenticeship</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>


        )

    return (
        <React.Fragment>
            {text}
        </React.Fragment>
    );
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
)(Intro);

