import { useContext } from 'react'
import './style.css'
import { Animacoes } from '../../provider'

const Planos = () => {
    return (
        <>        
            <section id='planos'>
                <div className="top">
                    <h2>Preparado pra começar?</h2>
                    <h3>Conheça os planos</h3>
                </div>
                <div className="plano">
                <div className="backgroundWoman"></div>
                    <div className="planoContainer">
                        <span className="periodo">2x na Semana</span>
                        <div className="precoContainer">
                            <span className="preco"><s>R$ 159,90</s></span>
                            <small>por mês <b className='ou'>ou</b></small>
                            <span className='promocao'>R$ 129,90 </span>
                            <small className='fidelidade'>No plano fidelidadae</small>
                        </div>
                        <div className="planoItens">
                            <ul>
                                <li>Acompanhamento com professor</li>
                                <li>Avaliação fisica a cada <b>90 dias</b></li>
                            </ul>
                        </div>
                    </div>
                    <div className="planoContainer">
                        <span className="periodo">3x na semana</span>
                        <div className="precoContainer">
                            <span className="preco"><s>R$ 159,90</s></span>
                            <small>por mês <b className='ou'>ou</b></small>
                            <span className='promocao'>R$ 129,90 </span>
                            <small className='fidelidade'>No plano fidelidadae</small>
                        </div>
                        <div className="planoItens">
                            <ul>
                                <li>Acompanhamento com professor</li>
                                <li>Avaliação física a cada <b>60 dias</b></li>
                            </ul>
                        </div>
                    </div>
                    <div className="planoContainer">
                        <span className="periodo">6x na semana</span>
                        <div className="precoContainer">
                            <span className="preco"><s>R$ 219,90</s></span>
                            <small>por mês <b className='ou'>ou</b></small>
                            <span className='promocao'>R$ 189,90 </span>
                            <small className='fidelidade'>No plano fidelidadae</small>
                        </div>
                        <div className="planoItens">
                            <ul>
                                <li>Acompanhamento com professor</li>
                                <li>Avaliação fisica a cada <b>30 dias</b></li>
                                <li>Plano alimentar</li>
                            </ul>
                        </div>
                    </div>
                    <div className="planoContainer ultimo">
                        <span className="vantagem">O MAIS VANTAJOSO</span>
                        <div className="precoContainer">
                            <i className="bi bi-tag"></i>
                            <div className="tag">
                                <span>20% de Desconto</span>
                                <small>no plano fidelidade trimestral</small>
                            </div>
                        </div>
                        <div className="planoItens">
                            <ul>
                                <li>NÃO BLOQUEIA O LIMITE DO CARTÃO</li>
                                <li>SEM MULTA APÓS O 3º MÊS</li>
                                <li>BRINDE DE BOAS VINDAS</li>
                                <li>30 DIAS GRÁTIS PARA ACOMPANHANTE</li>
                            </ul>   
                        </div>
                    </div>
                <div className="backgroundMan"></div>
                </div>
            </section>
        </>
    )
}

export default Planos