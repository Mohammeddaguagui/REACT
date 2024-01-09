import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Calcul_taxe from "./Calcul_taxe";
import Suivre_demand from "./Suivre_demand";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Menu />}>
                        <Route path='Calcul' element={<Calcul_taxe />} />
                        <Route path='Suivre' element={<Suivre_demand />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default App;