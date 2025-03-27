import { motion } from "framer-motion";
import Menu from "../../components/menu/menu";
import './style.css';
import { useContext, useEffect, useState } from "react";
import { Animacoes } from "../../provider";
import Agendar from "../../components/button/button";

const Home = () => {
    const [index, setIndex] = useState(0);
    const palavras = ['Corajoso', 'Focado', 'Forte'];
    const { opacidade, desfoque } = useContext(Animacoes);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % palavras.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="backgroundHome"></div>
            <div className="backgroundColor"></div>
            <section id="home">
                <Menu />
                <div className="textContent">
                    <motion.span className="frases" {...opacidade}>
                        Você é mais <br />
                        <motion.span className="adjetivo" {...opacidade} key={palavras[index]}>
                            <motion.b style={{display: 'inline-block'}} variants={desfoque} initial="initial" animate="animate" transition={{duration: 2, ease: 'easeOut'}}> {palavras[index]}</motion.b>
                        </motion.span>
                        <br />
                        do que imagina!
                    </motion.span>
                </div>
                <Agendar />
            </section>
        </>
    );
}

export default Home;
