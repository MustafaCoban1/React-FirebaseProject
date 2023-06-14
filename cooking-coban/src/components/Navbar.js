import { Link } from 'react-router-dom'

// style
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link className="brand">
                <h1>Cooking Coban</h1>
            </Link>
            <Link to="/create">Create Recipe</Link>
        </nav>
    </div>
  )
}
