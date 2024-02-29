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
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
            <div className="card" style={myStyle}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
            <div className="card" style={myStyle}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
        <br/><hr/><br/>
        <button type="button" className="btn btn-dark my-3" onClick={toggleStyle}>{btnText}</button>
    </div>
  )
}