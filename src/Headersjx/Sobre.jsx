import styles from "..//Headercss/sobre.module.css"
import { Link } from "react-router-dom"
import logofleur from "..//imagens/logofleur.jpeg"
import icons01 from "..//imagens/icons01.png"
import alice from "..//imagemfeminina/alice.jpeg"
import instagram from "..//icons/instagram.png"

function Sobre() {
    return (
        <div>
            
            <div className={styles.headersobre}>
                <Link to="/"><img src={logofleur} alt="Logo da fleur"></img></Link> 

                <li><Link to="/Carrinho"><img  src={icons01} alt="Icone de carrinho"></img></Link></li>
            </div>
            <div className={styles.about}>
            <div className={styles.title}>
                <h1>Conheça um pouco mais da minha historia!</h1>
            </div>  

            <div className={styles.history}>
                <p>
                Alice é uma jovem determinada que trilhou seu caminho até a formatura em Moda pela UFRJ em 2022. Desde tenra idade, ela acalentou o sonho de se destacar no mundo da moda, e sua jornada de educação e aprendizado finalmente a conduziu a um ponto de realização. Agora, Alice pode se orgulhar de ter realizado um de seus maiores objetivos: abrir sua própria marca de moda. Com dedicação, visão e um toque de ousadia, ela embarcou em uma emocionante jornada empresarial ao se tornar franqueada da renomada marca Fleur Brechó e Fleur Miçangas. Com sua paixão pela moda e um espírito empreendedor inabalável, Alice está pronta para deixar sua marca única e elegante no mundo da indústria da moda, inspirando outros a seguirem seus sonhos com determinação e criatividade.
                </p>
                <img src={alice} alt="Imagem da alice"></img>
            </div>

            <div className={styles.second}>
                <h1>Conheça nossa loja de bijuterias</h1>
                <a href="https://www.instagram.com/fleurmicangas/"><img src={instagram} alt="Logo do instagram"></img>@fleurmicangas</a>
            </div>

            <div className={styles.footer}>
                <h1>+55 21 9555-7838</h1>
                <h1>Teresópolis RJ</h1>
                <h1>@fleurBrecho</h1>
                <div className={styles.divisoria}></div>
                <h5>todos os direitos reservados a Fleur Brecho.</h5>
            </div>
            
            </div>
        </div>
    )
}

export default Sobre