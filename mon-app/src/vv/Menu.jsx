import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
const Menu=()=>{
    return(
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
                    <Link className="nav-link active" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/Calcul" > Calcul</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Suivre">Suivre</Link>
                </li>
   
            </ul>
    
        </div>
  </div>
</nav>
<div>
    <Outlet/>
</div>

</>
    )
}
export default Menu;