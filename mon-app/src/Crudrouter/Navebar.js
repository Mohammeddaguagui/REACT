import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
const Navebar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Affichage" >afficher</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Ajouter" > Ajouter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/modifier">modifier</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">search</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>

        </>
    )
}
export default Navebar;


