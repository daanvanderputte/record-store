import { NavLink, useNavigate } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <ul className="menu">
                <li>
                <NavLink to="new">New Releases</NavLink>
                </li>
                <li>
                <NavLink to="genres">Genres</NavLink>
                </li>
                <li>
                <NavLink to="picks">Our Picks</NavLink>
                </li>
                <li>
                <NavLink to="sale">Sale</NavLink>
                </li>
            </ul>
        </nav>
    )
}