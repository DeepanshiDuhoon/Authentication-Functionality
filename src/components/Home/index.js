import Header from '../Header'
import './index.css'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
