import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="d-flex justify-content-between px-5 py-3 bg-black text-white align-items-center">
            <span className="font-bold">
                <Link to="/" className="text-white text-decoration-none">React-2022</Link>
            </span>
            <span className="font-bold gap-3 d-flex">
                <Link to="/" className="text-white text-decoration-none">Home</Link>
                <Link to="/admin" className="text-white text-decoration-none">Admin</Link>
            </span>
        </nav>
    )
}
