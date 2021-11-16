import React, {useState} from 'react'

function TextForm(props) {

    const [text, setText] = useState('')

    const handleUpClick = (event) =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Coverted to UpperCase ', 'Success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to Lowercase ', 'Success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        console.log("I am copy")
        var text = document.getElementById('myBox')
        text.select()
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert('Text copied ', 'Success')
    }
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey',
            color: props.mode === 'dark'? 'white' : 'black'}} id="myBox" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className={`bt btn-${props.BtnColor} mx-1`} onClick={handleUpClick} >Covert to Uppercase</button>
            <button className={`bt btn-${props.BtnColor} mx-1`} onClick={handleCopy} >Copy Text</button>
            <button className={`bt btn-${props.BtnColor} mx-1`} onClick={handleLoClick}>Covert to Lowercase</button>
            <div className="container">
                <h1>Your text details</h1>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
        
        </>
    )
}

export default TextForm
