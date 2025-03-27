import './style.css'

const Footer = () => {
    return (
        <section id="footer">
            <div className="custom-shape-divider-bottom-1743038812">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
                <div className="social">
                    <div className="copyright">
                    <p>&copy; 2025 CNBox Cotia. Todos os direitos reservados.</p>
                    </div>
                    <div className="icons">    
                        <a href="https://www.instagram.com/cnboxcotia/" target='blank'><i className="bi bi-instagram"></i></a>
                        <a href="https://wa.me/5511988863535?text=<Oi, vim pelo site e quero agendar uma aula experimental, quando posso começar?>" target="blank"><i className="bi bi-whatsapp"></i></a>
                        <a href="https://g.co/kgs/63fL8ed" target='blank'><i className="bi bi-geo-alt"></i></a> 
                    </div>
                </div>
        </section>

    )
}

export default Footer