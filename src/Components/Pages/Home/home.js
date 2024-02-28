import "./style_home.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Home(){
    return(
        <motion.main 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.2}}}
        >
            <section className="banner">
                <div className="limite-container cntt-banner">
                    
                    <img className="foto" src="assets/IMG_0695.jpg" alt="imagem"/>

                    <div className="cntt-title">
                        <h1>Olá!</h1>
                        <h3>Um pouco sobre mim:</h3>
                        <p>Me chamo Álvaro, e sou programador. Sou brasileiro. Apaixonado pela programação, com objetivo de ser o melhor.</p>

                        <nav>
                            <ul type="none" className="btn-container">
                                <li><Link className="banner-link" to="/curriculum">Currículo</Link></li>
                                <li><Link className="banner-link" to="/project">Projetos</Link></li>
                                <li><Link className="banner-link" to="/contact">Contato</Link></li>
                            </ul>
                        </nav>

                        <nav className="btn-container">
                            <a href="https://www.linkedin.com/in/alvarocastroc/" target="_blank"><img src="assets/linkedin.png" alt="LinkedIn" title="Acesse o meu linkedIn" /></a>
                            <a href="https://github.com/AlvaroCastroC" target="_blank"><img src="assets/github.png" alt="Github" title="Acesse o meu GitHub" /></a>
                        </nav>

                    </div>
                </div>
            </section>
                <section className="bibliograph">
                    <div className="limite-container">
                         <div className="cntt-bibliograph">
                             <h2>Vamos falar mais sobre eu.</h2>

                             <p>Sempre busquei algo a mais para mim, um desafio. E hoje me encontro nele, a própria vida. O maior desafio feito pelo criador. Quão dificil é viver entre tantos desafios propostos pela vida? Dia após o outro, me vejo em um espelho esperando que o grande proposito chegue para mim. Mas a pergunta que fica é:</p>

                             <h4>Por que eu quis me tornar um prgramador?</h4>

                             <p>Bom, talvez esse tenha sido o desafio que eu escolhi me agarrar. Quando nascemos, temos multiplas escolhas sobre o que podemos nos tornar no futuro. Ser um médico, um Engenheiro, ser o que quiser, porém eu não quis nenhum deles. Eu queria algo diferente, algo que eu gostasse tmabém, e foi aí que encontrei a programação, misturando a tecnologia com cotidiano.</p>

                             <h4>O que esperar?</h4>

                             <p>Sobre mim? O melhor em que eu posso ser. Profissionalmente, um dos melhores. </p>

                             <p>Sobre o futuro? Um futuro promissor, com grandes conquistas e o objetivos alcançados.</p>
                        </div>
                    </div>
                    
                </section>
        </motion.main>
    )
}