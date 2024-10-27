import "./Navbar.css"
import ReactImg from "../../images/react-icon.png"
function Navbar(){
    return(
        <nav>
            <div className="nav-left">
                <img src={ReactImg} alt="" />
                <h1>ReactFacts</h1>
            </div>
            <h1>React Course - Project 1</h1>
        </nav>
    )
}

export default Navbar;