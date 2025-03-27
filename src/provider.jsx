import { createContext } from "react";
import { animate, motion } from "framer-motion"

export const Animacoes = createContext();

const AnimacoesProvider = ({ children }) => {

    const vaieVolta = {
        scale: [0.9, 1, 0.9],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
        }
    };

    const opacidade = {
        initial:{ opacity: 0 },
        animate:{ opacity: 1 },
        transition:{ duration: 2 }
    }

    const desfoque = {
        initial: { x: 0, opacity: 0, filter: "blur(4px)" },
        animate: { x: 100, opacity: 1, filter: "blur(0px)" },
    }


    const borda = {
        initial: { 
            border: "2px solid transparent",
            boxShadow: "inset 0 0 0 0 #0f0",
            color: "#fff"
        },
        animate: { 
            boxShadow: "inset 0 0 0 2px #0f0",
            transition: { 
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
             }
        }
    }

    return (
        <Animacoes.Provider value={{ vaieVolta, opacidade, borda, desfoque }}>
            {children}
        </Animacoes.Provider>
    )
}

export default AnimacoesProvider