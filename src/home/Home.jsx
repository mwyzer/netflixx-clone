
import Featured from "../components/featured/Featured.jsx"
import Navbar from "../components/navbar/Navbar.jsx"
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <Featured type="movie" />
        </div>
    )
}

export default Home
