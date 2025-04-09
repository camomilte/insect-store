/* Import React Router functions */
import { Link, NavLink } from "react-router";

/* Import logo */
import logo from "../assets/little-legs-boutique-high-resolution-logo-transparent.png";

const Navbar = () => {
  return (
    <div className="wrapper py-4 flex items-center justify-between border-b border-b-brown-300">
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-10"/>
        <h1 className="text-2xl font-bodoni font-semibold text-terracotta">Little Legs <br/>Boutique</h1>
      </Link>
      <ul className="flex items-center gap-4">
        <li><NavLink className="[&.active]:underline font-medium text-xl" to="/">Shop</NavLink></li>
        <li><NavLink className="[&.active]:underline font-medium text-xl" to="/login">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
