import React from 'react';
import ReactDOM from 'react-dom';


function Footer(){
  const myStyle = {
    position:'absolute',
    left:'0',
    bottom:'0',
    right:'0',
  
    backgroundColor: "#000000"
  
  }
  
  return (

        <div className="text-center p-3 text-light" style={myStyle}>
    © 2022 Copyright:
    <a className="text-light">SkylineSchool.com</a>
  </div>

    

      
  )
}

  document.addEventListener('DOMContentLoaded', () => {
      ReactDOM.render(
        <Footer />,
        document.getElementById('footer'),
      )
      
    })
  