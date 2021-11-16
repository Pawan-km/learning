import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './css/Navbar.css'
// import { Link } from 'react-router-dom'

function Navbar(props) {
    const [color, setColor] = useState(null)
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className={`theme-menu text-${props.mode === 'dark'? 'light' : 'dark'}`}>
                    <p>Themes Color</p>
                    <button className="theme-color theme-red" onClick={() => {
                        setColor('red')
                        props.toggleMode(color)
                    }}></button>
                    <button className="theme-color theme-orange" onClick={() => {
                        setColor('orange')
                        props.toggleMode(color)
                    }}></button>
                    <button className="theme-color theme-green" onClick={() => {
                        setColor('green')
                        props.toggleMode(color)
                    }}></button>
                </div>
                <div class={`form-check form-switch text-${props.mode === 'dark'? 'light' : 'dark'}`}>
                    <input onChange={() => {
                        setColor(props.mode === 'dark' ? 'dark' : 'light')
                        props.toggleMode(color)
                    }} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">{props.text}</label>
                    </div>
                
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Title'
}

export default Navbar
