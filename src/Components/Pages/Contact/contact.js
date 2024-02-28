import React from "react"
import "./style_contact.css";

import { motion } from "framer-motion";

export default function Contact(){

    return(
        <motion.main 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.2}}}
        >
            <section className="contact-container">
                <div className="limite-container contact">
                    <div className="phone">
                        <div className="phone-tittle">
                            <h2>Contate-me</h2>
                            <p>Caso esteja interessado em meus serviços, entre em contato!</p>
                        </div>

                        <div className="phone-number">
                            <h4>Via telefone</h4>
                            <p>(99) 99163-8167</p>
                        </div>
                    </div>
                    <div className="form">
                        <h2>Ou mande um e-mail</h2>
                        <form action="https://formsubmit.co/alvarocastrocunha14@gmail.com" method="post">
                            <input type="hidden" name="_next" value="http://localhost:3000/sucess" />

                            <input type="hidden" name="_autoresponse" value="Mensagem recebida! 😊👍.
                            Em breve retornarei a sua mensagem." />

                            <label for="name">Name</label>
                            <input id="name" type="text" name="name" />

                            <label for="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="exe@email.com" required/>

                            <label for="subject">Assunto</label>
                            <input id="subject" type="text" name="subject" required/>

                            <label for="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="message" placeholder="Digite aqui..." required />

                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </motion.main>
    )
}