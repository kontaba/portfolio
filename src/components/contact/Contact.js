import React, { useState } from 'react';
import {connect} from 'react-redux';
import './contact.scss';
import emailjs from 'emailjs-com';

const Contact = (props) => {

    const [isSent, setIsSent] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsSent(true);
        
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID, 
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_INTEGRETION_USER_ID
            ).then(res => {
                console.log(res);
                setName('');
                setEmail('');
                setMessage('');
            }).catch(err => console.log(err));

        setConfirmation(
            props.language === 'english' ? 
                "Thanks, I'll reply ASAP" : 
                "Merci, je vous répondrai au plus vite"
        );

        setTimeout(() => {
            setConfirmation('');
        }, 1500);
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder={props.language === 'french' ? 'Nom' : 'Name'}
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <textarea 
                        placeholder="Message"
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit">
                        {props.language === 'french' ? 'Envoyer' : 'Send'}
                    </button>
                    {/* {isSent && <span>Thanks, I'll reply ASAP</span>} */}
                    <span>{confirmation}</span>
                </form>
            </div>
        </div>
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
)(Contact);
