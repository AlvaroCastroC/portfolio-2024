import React from "react";
import {Link} from "react-router-dom";


import "./style_header.css";


export default function Header(){

  
    return(
        
        <header>
            <div className="limite-container">
                <div className="top-tittle">
               <h3> <Link className="link-home" to="/"><span>Álvaro de Castro</span></Link> programador Full-Stack</h3>

                    <nav className="header-link">
                       <ul type="none">
                        <li><Link className="link" to="/curriculum">Carreira</Link></li>

                        <li><Link className="link" to="/project">Projetos</Link></li>
                        
                        <li><Link className="link" to="/contact">Contato</Link></li>
                       </ul>
                    </nav>
                </div>
            
            </div>
        </header>
    )

    
}