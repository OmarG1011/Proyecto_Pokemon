import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../components/Home";
import { SectionPokemons } from "../pages/SectionPokemons";
import { DetailsPokemons } from "../pages/DetailsPokemons";

export function MyRoutes() {
    return (
    <Router>
        <Routes  basename="/Pokemon">
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Pokemons" element={<SectionPokemons />} />
            <Route path="/pokemon/:id"element={<DetailsPokemons />} />
        </Routes>
    </Router>)
}
export default MyRoutes