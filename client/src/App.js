// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer'
import Footer from './Footer'


const App = props => (
  <div>
    <h1>Hello {props.name}!</h1>
    <Timer />
    <Footer />
      </div>
)



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
