import Header from '../Header'
import './index.css'
import LogoutButton from '../LogoutButton'

const About = () => (
  <div>
    <Header />
    <div className="about-container">
      <h1 className="heading">About Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default About
