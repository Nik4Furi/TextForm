import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    });
    const [btnText, setBtnTxt] = useState('Enable Dark Mode');
    
    
    const handleColChange = () =>{
        if (myStyle.color == 'white') {
            setMyStyle({color:'black', backgroundColor:'white'});
            setBtnTxt('Enable Dark Mode');
        }
        else {
            setMyStyle({color:'white', backgroundColor:'black'});
            setBtnTxt('Enable Light  Mode');


        }
    }

    const handleCopy = () => {
        let copyText = document.querySelector("#myPop");
        copyText.select();
        document.execCommand('copy');
        if (document.execCommand('copy') == true) {
            let newText = text;
            //  console.log(newText);
        }
        props.shwoAlert('Dopy the text');

    }
    const handleUpClick = () => {
        // console.log("Uppercase converts",text);
        let newText = text.toUpperCase();
        setText(newText);
        props.shwoAlert('Converted to in uppercase');

    }
    const handleCapitialze = (word) => {
        // console.log("Uppercase converts",text);
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice();
        // props.shwoAlert('Converted to in capitialze');

        
    }
    const handleLoClick = () => {
        // console.log("Uppercase converts",text);
        let newText = text.toLowerCase();
        setText(newText);
        props.shwoAlert('Converted to in lowercase');

    }
    const handleOnChange = (event) => {
        // console.log("Uppercase not converts");
        setText(event.target.value);
        props.shwoAlert('Converted to in it');
    }
    const [text, setText] = useState("");
    // setText = "Enter your clagss";
    return (
        <>
            <div className="container " style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading} </h1>
                <div className="form-group" >
                    {/* <label htmlFor ="myPop">Example textarea</label> */}
                    <textarea className="form-control" style={{background:props.mode==='dark'?'light':'gray',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myPop" rows="7" ></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleCapitialze}>Convert to Capitialze</button>
                <button className="btn btn-primary my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleColChange}>{btnText}</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{(text.split(' ').length)} words {text.length} charachters</p>
                <p>{0.0008 * text.split(' ').length} reading times</p>
                <h2>Preview Text</h2>
                <p>{text.length>0?text:"Enter in the textareat for word wrapping"}</p>
            </div>
        </>
    )
}
