import { useContext } from 'react';
import './style.css'
import { motion } from "framer-motion"
import { Animacoes } from '../../provider';

const CrossFit = () => {
    const {vaieVolta} = useContext(Animacoes)

    return (
        <>
            <section id="crossfit">
                <div className="top">
                    <h2>O CrossFit</h2>
                    <p>
                    Se você busca resultados rápidos e duradouros, 
                    o CrossFit é a solução perfeita! 
                    Uma metodologia que combina exercícios funcionais de
                    alta intensidade com movimentos naturais, criando um 
                    treino dinâmico e desafiador. Não importa sua experiência
                    ou nível de condicionamento físico, o CrossFit é para todos!
                    </p>
                </div>
                <div className="boxText">
                    <div className="iconesCross">
                        <h3>O que você vai conquistar com o CrossFit?</h3>
                        <div className="icones">
                            <div className="icone">
                                <motion.i className="fa-solid fa-dumbbell" animate= {vaieVolta}></motion.i>
                                <span>Força</span>
                                <small>Ganhe músculos e aumente sua resistência</small>
                            </div>
                            <div className="icone">
                                <motion.i className="fa-solid fa-fire-flame-curved" animate={vaieVolta}></motion.i>
                                <span>Emagrecimento</span>
                                <small>Excelente para queimar calorias de maneira eficiente.</small>
                            </div>
                            <div className="icone">
                                <motion.i className="bi bi-heart-pulse-fill" animate={vaieVolta}></motion.i>
                                <span>Condicionamento</span>
                                <small>Aumento na disposição</small>
                            </div>
                            <div className="icone">
                                <motion.i className="fa-solid fa-person-running" animate={vaieVolta}></motion.i>
                                <span>Condicionamento</span>
                                <small>Aumento na disposição</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CrossFit