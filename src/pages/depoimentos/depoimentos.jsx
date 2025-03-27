import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './style.css'
import { Animacoes } from '../../provider'
import Footer from '../../components/footer/footer'
import Agendar from '../../components/button/button'

const Depoimentos = () => {
    const { opacidade } = useContext(Animacoes)
    const depo = [
        {   
            foto: '/cnbox/victor.png',
            nome: "Victor Sanches",
            comentario: "Treino na academia todos os dias e adoro! Não estava engajado em nenhuma atividade física, mas eles me ajudaram em voltar à ativa. Os professores são excelentes, sempre atentos e motivadores. A infraestrutura é top, com tudo o que você precisa para um treino completo. Super recomendo para quem busca um lugar de qualidade para treinar e se sentir bem!"
        },
        {   
            foto: '/cnbox/mayara.png',
            nome: "Mayara Lima",
            comentario: "Melhor Cross da região. Um excelente ambiente para treinos e super completo. Professores muito atenciosos e gentis! Recomendo muito para quem procura um novo estilo de vida!!! 🏋🏽‍♀️"
        },
        {   
            foto: '/cnbox/tamires.png',
            nome: "Tamires Santos",
            comentario: "O box tem uma vibe incrível, me sinto em casa desde o primeiro dia de treino. Os treinos são eficientes, ótimos para que buscar se desafiar, emagrecer, definir ou ter uma rotina mais saudável, lá todos se incentivam, fazendo com que você se supere a cada dia."
        },
        {   
            foto: '/cnbox/ph.png',
            nome: "PH",
            comentario: "Galera a melhor academia de cross de Cotia , sensacional , a galera é top os professores são sensacionais e os proprietários surreais , vale a pena conferir galera , eu PH recomendo de olhos fechados 🇧🇷👊"
        },
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex +1) % depo.length)
        }, 6000);
        return () => clearInterval(interval)
    }, [])

    const depos = depo[index]

    return (
        <>
            <section id="depoimentos">
            <div className="backgroundDepoimentos"></div>
            <div className="backgroundColor"></div>
            <div className="depoimentosContainer">
                <div className="top">
                <h2>DEPOIMENTOS</h2>
                <h3>O que estão falando sobre o CNBox Cotia?</h3>
                </div>
                <motion.div className="depoimento" {...opacidade} key={depos.nome}>
                    <img src={depos.foto} alt="" />
                    <h3>{depos.nome}</h3>
                    <p>{depos.comentario}</p>
                </motion.div>
                <Agendar />
            </div>
            <Footer />
            </section> 
        </>
    )
}

export default Depoimentos