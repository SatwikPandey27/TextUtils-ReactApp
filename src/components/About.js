import React from 'react'
import { useState } from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color : "black",
        backgroundColor : "white"
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === "black"){
            setmyStyle({
                color : "white",
                backgroundColor : "black",
                border : "2px solid white"
            })
            setbtnText("Enable Light Mode")
            }
            else {
                setmyStyle({
                    color: "black",
                    backgroundColor: "white"
                }) 
                setbtnText("Enable Dark Mode")
            }
        }

    
  return (
    <div className="container my-3" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="card-group">
            <div className="card" style={myStyle}>
                <div className="card-body">
                <h5 className="card-title">About this project</h5>
                <p className="card-text">Spruce up your writing with this React text utility project! It provides a one-stop shop for text manipulation. Convert between upper and lower case, effortlessly copy text to your clipboard, and clean up unwanted spaces. With a click, you can eliminate extra spaces, clear all whitespace, or even start fresh with a blank text box.</p>
                </div>
            </div>
            <div className="card" style={myStyle}>
                <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <p className="card-text">Hey there! I'm Satwik Pandey, a highly motivated web developer with specialisation in backend systems development using Django REST framework. Passionate in Machine Learning and AI related disciplines. 
                Naturally vurious and hardworking, always finding ways to solve programmatic problems.</p>
                </div>
            </div>
            <div className="card" style={myStyle}>
                <div className="card-body">
                <h5 className="card-title">Learn more!</h5>
                <p className="card-text"> To learn more about me visit me @github.com/SatwikPandey27</p>
                </div>
            </div>
        </div>
        <br/><hr/><br/>
        <button type="button" className="btn btn-dark my-3" onClick={toggleStyle}>{btnText}</button>
    </div>
  )
}