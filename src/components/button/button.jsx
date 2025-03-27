import { useContext } from "react"
import { Animacoes } from "../../provider"
import { motion } from "framer-motion"
import './style.css'

const Agendar = () => {
    const { borda } = useContext(Animacoes)

    return (
        <div className="botao">
            <small>Clique aqui para</small>
            <motion.button variants={borda} initial="initial" animate="animate"> <a href="https://wa.me/5511988863535?text=<Oi, vim pelo site e quero agendar uma aula experimental, quando posso começar?>" target="blank">AGENDAR AULA GRÁTIS</a></motion.button>
        </div>
    )
}

export default Agendar