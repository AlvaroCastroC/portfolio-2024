import React from "react"
import "./style_curriculum.css";

import { motion } from "framer-motion";

export default function Curriculum(){
    return(
        <motion.main 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.2}}}
        >
            <section className="section-curriculum">
                <div className="limite-container job">
                <h1>Carreira</h1>
                    <div className="contt-curriculum">
                        
                        <div className="curriculum-tittle">
                            <h2>Experiência</h2>
                            <h2>Profissional</h2>
                        </div>
                            
                        <div className="contt-exp">
                            <div>
                                <h4>IADVH <span>- Atual</span></h4>
                                <p>Trabalho com assistência social, cuidando de criaças. Turno integral.</p>
                            </div>
                                
                            <div>
                                <h4>El-Shaday <span>- 8 meses</span></h4>
                                <p>Trabalhei como repositor de mercadorias, realizando limpeza, tanto local quanto em prateleiras. Repositor de Hort-Fruit, realizando limpezas e reposição.</p>
                            </div>

                            <div>
                                <h4>UNINTER <span>- 1 ano</span></h4>
                                <p>Prestação de serviço. Entregando panfletagens nas ruas, e moradias, colando cartazes para divulgação de cursos.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="section-curriculum ">
                <div className="limite-container education">
                    <div className="contt-curriculum">
                        
                        <div className="curriculum-tittle">
                            <h2>Educação &</h2>
                            <h2>Certificações</h2>
                        </div>
                            
                        <div className="contt-exp">
                            <div>
                                <h4>UNINTER / Tecnologia <span>2020 - 2022</span></h4>
                                <p>Tecnológo Análise de Desenvolvimento de Sistemas.</p>
                            </div>
                                
                            <div>
                                <h4>DevMedia / Full-Stack <span>2022 - 2023</span> </h4>
                                <p>Especialização em Full-Stack. Com mais de 5 certificados. </p>
                            </div>

                            <div>
                                <h4>Inglês / UNINTER <span>2020 - 2022</span> </h4>
                                <p>Formação em inglês básico. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-curriculum">
                <div className="limite-container">
                    <div className="contt-curriculum">
                        
                        <div className="curriculum-tittle">
                            <h2>Habilidade &</h2>
                            <h2>Skills</h2>
                        </div>
                            
                        <div className="contt-exp">
                            <div>
                                <h4>JavaScript</h4>
                                <p>Habilidade para utilização em sites interativos, como implementação de funcionalidadese. </p>
                            </div>


                            <div>
                            <h4>Html e CSS</h4>
                                <p>Experiência a mais de 1 ano, com vários projetos criados, como landing pages e page statics.</p>
                            </div>
    
                            <div>
                                <h4>Node.js</h4>
                                <p>Implementação de projetos de API, usando o express.</p>
                            </div>
                            <div>
                                <h4>MySQL</h4>
                                <p>Para criação de banco de Dados, com conhecimento em SQL.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    )
}