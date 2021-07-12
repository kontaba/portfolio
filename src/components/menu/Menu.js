import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import './menu.scss';

const Menu = (props) => {
    const { menuOpen, setMenuOpen } = props;

    useEffect(() => {
        console.log('log of props.language', props.language)
    }, [props.language])

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                {/* <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li> */}
                {/* <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>  */}
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li className="languages">
                    <span 
                        className={props.language === 'french' 
                            ? 'active' : null
                        }
                        onClick={() => {
                            console.log('switched to french')
                            props.switchToFrench();
                            setMenuOpen(false);
                        }}
                    >Fr</span> / 
                    <span
                        className={props.language === 'english' 
                            ? 'active' : null
                        }
                        onClick={() => {
                            console.log('switched to english')
                            props.switchToEnglish();
                            setMenuOpen(false);
                        }}
                    > En</span>
                </li>
            </ul>
        </div>
    );
}

//get global states function
function mapStateToProps(state) {
    return { 
      language: state.language 
    }
  }
  
  //dispatch Function
  function mapDispatchToProps(dispatch) {
    return {
      switchToFrench: () => {
          dispatch({ type: 'switch-french', language: 'french' })
      },
      switchToEnglish: () => {
          dispatch({ type: 'switch-english', language: 'english' })
      }
    }
  }
  
  //Connection
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(Menu);
