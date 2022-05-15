import React from 'react'

export default function About() {
  let myStyle = {
    marginbottom: "100px"
  }
  let pStyle = {
    backgroundColor: "#ec7063",
    padding: "20px",
    fontFamily: "Serif",
    color: "#17202a",
    fontWeight: "bold",
    fontStyle: "italic"
  }
  return (
    <div className='container'>
      <div className="card mx-auto bg-dark rounded-sm align-center" style={{ width: "18rem", 'marginTop': '9rem' }}>
        <img src="https://ih1.redbubble.net/image.773347119.8054/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg" className="card-img-top img-fluid img-thumbnail  max-width-70" style={{height:'15rem'}} alt="..." />
        <div className="card-body">
          <div className='text-center'>
            <h5 className="card-title text-white">Todo-List</h5>
            <p className="card-text text-white-50">Created by Siddhant Rai. </p>
            <p className="card-text text-white-50">You can find me on GitHub and checkout my other projects too :D </p>
            <a href="https://github.com/siiddhantt" className="btn btn-primary text-center">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}