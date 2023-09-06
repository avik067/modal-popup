import Header from '../Header'

import './index.css'

const About = () => {
  console.log('')

  return (
    <>
      <Header />
      <div className="about-container row center align-item">
        <img
          className="about"
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
        />
      </div>
    </>
  )
}

export default About
