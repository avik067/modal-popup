import Header from '../Header'

import './index.css'

const Home = () => {
  console.log('')

  return (
    <>
      <Header />
      <div className="home-container row center align-item">
        <img
          className="home"
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
        />
      </div>
    </>
  )
}

export default Home
