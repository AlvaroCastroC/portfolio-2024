import React from "react";
import {useNavigate} from "react-router-dom";
import "./style_sucess.css";

export default function Sucess(){

    const navigate = useNavigate();
    return(
        <section className="contt-sucess">
            <div className="limite-container">
                <div>
                    <h2>E-mail enviado com sucesso!!</h2>
                    <p>Com este e-mail retornarei a resposta em breve.</p>
                    <p>Agradeço pelo seu contato!</p>
                    <div className="button-container">
                    
                <button onClick={()=>navigate("/contact")}>Voltar a página anterior</button>
                    </div>
                </div>

            </div>
        </section>
    )
}