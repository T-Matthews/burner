import logo from'../static/car-wheel.png'
import { Link } from 'react-router-dom'

let Navbar = () => {
 

    
    return (
        <div>
            <nav className="navbar navbar-light">
            <Link className="navbar-brand" to="/">
                <img className="App-logo" src={logo} width="40" height="40" alt=""/>
            </Link>
            <div>
                <button className='btn btn-sm btn-secondary nav-btn'>Sign In</button>
                <button className='btn btn-sm btn-secondary nav-btn'>Sign Up</button>
            </div>
            </nav>
        </div>
    )
}

export default Navbar