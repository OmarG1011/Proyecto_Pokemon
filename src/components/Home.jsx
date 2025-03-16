import { Navbarpoke } from "./Navbar";
import Bienvenida from './bienvenida'
import { SectionHome } from "./SectionHome";
import { Contact } from "./Footer";
import "./cardiconicos.css";
export function Home() {
    return (
        <>
            <div className="containe-fluid">
                <Navbarpoke />
            </div>
            <div className="container-fluid pt-5 d-flex flex-column text-center justify-text justify-content-center align-items-center">
                <p>Bienvenido al Pokémon Observatorium 
                adentrate en el fascinante mundo de los Pokémon y descubre sus increíbles habilidades.</p>
                <Bienvenida />
            </div>
            <SectionHome />
            <Contact />
        </>
    );
};