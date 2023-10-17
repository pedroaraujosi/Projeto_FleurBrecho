import styles from"..//Headercss/contato.module.css"
import logofleur from "..//imagens/logofleur.jpeg"
import icons01 from "..//imagens/icons01.png"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import instagram from "..//icons/instagram.png"
import facebook from "..//icons/facebook.png"
import tiktok from "..//icons/tiktok.png"


function Contatos() {
    


    return (

        <div>
            
            <div className={styles.headerContatos}>
                <Link to="/"><img src={logofleur} alt="Logo da fleur"></img></Link> 

                <li><Link to="/Carrinho"><img  src={icons01} alt="Icone de carrinho"></img></Link></li>
            </div>  

            <div className={styles.com}>
                
            <div className={styles.contats}>
                <div className={styles.cont}>
                <h1>Entre em contato conosco</h1>
                <p>Temos uma equipe pronta a sua espera para melhor lhe atende-los</p>
                </div>
                
                <div className={styles.formulario}>
                    <Form>
                        <h1>Cadastre-se já</h1>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="DIgite sua senha" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control placeholder="Digite o nome do seu bairro" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control placeholder="Rua Janainna 188" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Selecione...</option>
                            <option>Acre</option>
                            <option>Alagoas</option>
                            <option>Amapá</option>
                            <option>Amazonas</option>
                            <option>Bahia</option>
                            <option>Ceará</option>
                            <option>Espirito santo</option>
                            <option>Goiás</option>
                            <option>maranhão</option>
                            <option>Mato Grosso</option>
                            <option>Mato Grosso do Sul</option>
                            <option>Minas Gerais</option>
                            <option>Pará</option>
                            <option>Paraíba</option>
                            <option>Paraná</option>
                            <option>Pernambuco</option>
                            <option>piauí</option>
                            <option>Rio de Janeiro</option>
                            <option>Rio Grande do Norte</option>
                            <option>Rio Grande do Sul</option>
                            <option>Rondônia</option>
                            <option>Roraima</option>
                            <option>Santa Catarina</option>
                            <option>São Paulo</option>
                            <option>Sergipe</option>
                            <option>Tocantis</option>
                            <option>Destrito Federal</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Aceito Receber Emails com promoções" />
                    </Form.Group>

                    <Button className={styles.btn} variant="primary" type="submit">
                        Enviar
                    </Button>
                    </Form>

                </div>

            </div>
            

            <div className={styles.loc}>
                <h1>Nos siga nas redes sociais!</h1>
                <div>
                  <a href="https://www.instagram.com/fleurbrechoo/"><img src={instagram} alt="Logo do instagram"></img>@FleurBrechoo</a>  
                  <a href="*"><img src={facebook} alt="Logo do facebook"></img>Fleur Brecho</a>
                  <a href="*"><img src={tiktok} alt="Logo do tiktok"></img>TikTok</a>
                </div>

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

export default Contatos