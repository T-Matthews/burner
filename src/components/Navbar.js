import logo from'../static/car-wheel.png'
import { Link } from 'react-router-dom'

let Navbar = props => {

    
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img className="App-logo" src={logo} width="35" height="35" alt=""/>
            </Link>
            <button className='btn btn-sm btn-info'>Sign In</button>
            <button className='btn btn-sm btn-info'>Sign Up</button>
            </nav>
        </div>
    )
}

export default Navbar