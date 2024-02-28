import React from "react";
import "./style_footer.css";

export default function Footer(){
    return(
        <footer>
            <div className="limite-container contt-rodape">
                <div className=" rodape">
                    <div>
                        <h4>Telefone</h4>
                        <p>(99) 99163-8167</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p><a href="https://mailto:alvarocastrocunha14@gmail.com" target="parent">alvarocastrocunha14@gmail.com</a></p>
                    </div>

                    <div className="footer-link">
                        <h4>Links Sociais</h4>
                        <ul>
                        <a href="https://www.linkedin.com/in/alvarocastroc/" target="_blank"><img src="assets/linkedin.png" alt="LinkedIn" title="Acesse o meu linkedIn" /></a>
                        <a href="https://github.com/AlvaroCastroC" target="_blank"><img src="assets/github.png" alt="Github" title="Acesse o meu GitHub" /></a>
                        </ul>
                    </div>

                    <div>
                        <p>©️ 2023 por Alvaro de Castro </p>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}