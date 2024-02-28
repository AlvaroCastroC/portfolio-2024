import React from "react"
import "./style_project.css";

import { motion } from "framer-motion";

export default function Project(){
    const dados = [
        { id: 1, nome: "Histórico de Pesquisa", image: "assets/historicoApi.png", alt: "Histórico de pesquisa com consumo de api", prgf: "Projeto criado com React. O foco principal foi o consumo de uma API, em que contém todos os estados brasileiros e suas iguarias. Projeto pessoal.", linkRepo: "https://github.com/AlvaroCastroC/Historico-Pesquisa", linkSite: "https://pesquisadeestados.onrender.com/"},

        { id: 2, nome: "Cardápio", image: "assets/cardapio.png", alt: "Cardápio de restaurante", prgf: "Cardápio com várias opções de pratos que o cliente possa escolher. Projeto criado na devmedia, utilizando o React e javascript, e com responsividade.", linkRepo: "https://github.com/AlvaroCastroC/RESTAURANT-Cardapio", linkSite: "https://alvarocastroc.github.io/RESTAURANT-Cardapio/"},

        { id: 3, nome: "Agência", image: "assets/agencia.png", alt: "Agência de branding", prgf: "Web site de agência de branding. Uma landing Page com responsividade, criado enquanto estudava na Devmedia.", linkRepo: "https://github.com/AlvaroCastroC/Agencia-Branding", linkSite: "https://alvarocastroc.github.io/Agencia-Branding/"},

        { id: 4, nome: "Odontologia", image: "assets/odontologia.png", alt: "Site de odontologia", prgf: "Web site desenvolvido com html e css, com responsividade. Um dos primeiros projetos meus criado, cursando na Devmedia.", linkRepo: "https://github.com/AlvaroCastroC/odontologia", linkSite: "https://alvarocastroc.github.io/odontologia"},

        { id: 5, nome: "Barbearia", image: "assets/barbearia.png", alt: "Site de barbearia", prgf: "Site desenvolvido com React, tendo a função Darkmode com responsividade.", linkRepo: "https://github.com/AlvaroCastroC/barbearia", linkSite: "https://alvarocastroc.github.io/barbearia/"},

        { id: 6, nome: "Óticas", image: "assets/oticas.png", alt: "Site de óticas", prgf: "Uma Landing page com produtos de óticas para os clientes. Projeto criado com html e css, e responsivo.", linkRepo: "https://github.com/AlvaroCastroC/oticas", linkSite: "https://alvarocastroc.github.io/oticas/"},
    ]


    
    return( 
        <motion.main 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.2}}}
        >
            <section className="section-card">
                <div className="limite-container">
                    <h1>Projetos</h1>

                    <div className="contt-cards">
                        {
                            dados.map(e => {
                                return (
                                    <div className="card">
                                        <img src={e.image} alt={e.alt} title={e.alt}></img>
                                        <div className="info-card">
                                            <div className="card-tittle">
                                                <h4>{e.nome}</h4>
                                                <p>{e.prgf}</p>
                                                
                                            </div>
                                            <div className="card-links">
                                                <a href={e.linkSite} target="_blank">Ver projeto</a>
                                                <a href={e.linkRepo} target="_blank">Ver repositório</a>
                                            </div>
                                        </div>
                                     </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>

            <section className="section-card">
                <div className="limite-container extra">
                    <h1>Projetos Extras</h1>
                    <div className="contt-cards">
                        <div className="card">
                            <img src="assets/spaceX.png" alt="" title=""></img>
                            <div className="info-card">
                                <div className="card-tittle">
                                    <h4>Space - X Destroyer</h4>
                                    <p>Jogo criado com html canvas e javascript. Jogo Inspirado no Space invaders</p>
                                    
                                </div>
                                <div className="card-links">
                                    <a href="https://alvarocastroc.github.io/Space-X-Destroyer/" target="_blank">Ver projeto</a>
                                    <a href="https://github.com/AlvaroCastroC/Space-X-Destroyer" target="_blank">Ver repositório</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    )
}