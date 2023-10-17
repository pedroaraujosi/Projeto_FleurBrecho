import styles from "../Inicio.module.css"
import logo from "../imagens/logofleur.jpeg"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import slider01 from "../imagens/slider01.jpg"
import slider02 from "../imagens/slider02.jpg"
import slider03 from "../imagens/slider03.jpg"
import icons01 from '..//imagens/icons01.png'
import bluesteel from '..//imagens/bluesteel.jpg'
import lewis from '..//imagens/lewis.jpg'
import dudalina from '..//imagens/dudalina.jpg'
import zara from '..//imagens/zara.jpg'
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import blusa01 from '..//imagens/blusa01.jpg'
import calça01 from '..//imagens/calça01.jpg'
import top01 from '..//imagens/top01.jpg'
import blazer01 from '..//imagens/blazer01.jpg'
import vestido02 from '..//imagens/vestido02.jpg'
import calça02 from '..//imagens/calça02.jpg'
import calça03 from '..//imagens/calça03.jpeg'
import casaco01 from '..//imagens/casaco01.jpg'
import promoção from '..//imagens/promoção.jpg'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Inicio() {
    
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    
      


    return (

        <div className={styles.begin}>

            <div className={styles.header} >
                <Navbar expand="lg" className="body-tertiary" bg="light" data-bs-theme="light">
                 <Container className={styles.logos} fluid>
                    <Navbar.Brand><Link><img src={logo} alt="logo Fleur"></img></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                    </Nav>
                    <Form className="d-flex">
                    <ul> 
					 	<li><Link className={styles.navBar} to="/">Inicio</Link></li>
                        <li><Link className={styles.navBar} to="/Produtos">Produtos</Link></li>
                        <li><Link className={styles.navBar} to="/Contatos">Contatos</Link></li>
                        <li><Link className={styles.navBar} to="/Sobre">Sobre</Link></li>
                    	<li><Link className={styles.navBar} to="/Carrinho"><img src={icons01} alt="icone carrinho"></img></Link></li>  
                    </ul>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            </div>
        

            <div className={styles.carrosel}>
                <div style={{ display: 'block', padding: 0 }}>
                    <Carousel fade>
                        <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={slider01}
                            alt="primeira imagem"
                        />
                        <Carousel.Caption>
                            <h3>Bem-vindo a FLeur Brecho</h3>
                            <p>Reviva o passado, Vista o futuro: sua jornada na moda vintage começa aqui!</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={slider02}
                            alt="Segunda imagem"
                        />
                        <Carousel.Caption>
                            <h3>Peças masculinas com 30% de desconto!</h3>
                            <p><Link style={{textDecoration:"none", color:"black"}} to="/produtos">clique e descubra!</Link></p>
                        </Carousel.Caption>
                        </Carousel.Item>
    
                        
                        <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={slider03}
                            alt="terceira imagem"
                        />
                        <Carousel.Caption>
                            <h3>Desconto especial em vestidos</h3>
                            <p><Link style={{textDecoration:"none", color:"white"}} to="/produtos">Sinta-se linda, Gaste menos, venha conferir nossas ofertas!</Link></p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                        
                </div>
            </div>

            <div className={styles.marcas}>
                <h1>Algumas marcas que trabalhamos</h1>
                <div>
                    <img src={bluesteel} alt="primeira marca"></img>
                    <img src={lewis} alt="segunda marca"></img>
                    <img src={dudalina} alt="terceira imagem"></img>
                    <img src={zara} alt="quarta marca"></img>
                </div>
            </div>

            <div className={styles.produtos}>
                <h1>Principais escolhas</h1>
                    <Container>
                        <Row>
                            <Col xs={{ order: 'second' }}>
                                <CardGroup>
                                    <Card className={styles.cards}>
                                        <Card.Img variant="top" src={calça01} />
                                        <Card.Body>
                                        <Card.Title>Calças mais vendidas</Card.Title>
                                        <Card.Text>
                                           <Link to="/produtos"><input className={styles.btn} type="button" value="vá para os produtos"></input></Link>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </Col>
                                
                            <Col xs={{ order: 'third' }}>
                                <CardGroup>
                                        <Card className={styles.cards}>
                                            <Card.Img variant="top" src={blusa01} />
                                            <Card.Body>
                                            <Card.Title>Camisas atemporais</Card.Title>
                                            <Card.Text>
                                               <Link to="/produtos"><input className={styles.btn} type="button" value="vá para os produtos"></input></Link>
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                            </Col>

                            <Col xs={{ order: 'first' }}>
                                <CardGroup>
                                        <Card className={styles.cards}>
                                            <Card.Img variant="top" src={blazer01} />
                                            <Card.Body>
                                            <Card.Title>Blazers vintage</Card.Title>
                                            <Card.Text>
                                               <Link to="/produtos"><input className={styles.btn} type="button" value="vá para os produtos"></input></Link>
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                            </Col>

                            <Col xs={{ order: 'last' }}>
                                    <CardGroup>
                                        <Card className={styles.cards}>
                                            <Card.Img variant="top" src={top01} />
                                            <Card.Body>
                                            <Card.Title>Top alternativo</Card.Title>
                                            <Card.Text>
                                               <Link to="/produtos"><input className={styles.btn} type="button" value="vá para os produtos"></input></Link>
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                            </Col>
                        </Row>
                    </Container>
            </div>

            <div className={styles.outros}>
                <h1>outros produtos</h1>
                <div className={styles.carrosel02}>
                    
                    <div style={{ padding: `0 ${chevronWidth}px` }}>
                        <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={3}
                            gutter={20}
                            leftChevron={<button>{'<'}</button>}
                            rightChevron={<button>{'>'}</button>}
                            outsideChevron
                            chevronWidth={chevronWidth}
                        >
                            <div className={styles.item01}><img src={vestido02}></img>
                            <h1>Vestido de verão</h1>
                            <h4>109,99</h4>
                           <Link to="/carrinho"><input className={styles.btn02} type="button" value="Compre já"></input></Link>
                            </div>

                            <div className={styles.item02}><img src={casaco01}></img>
                            <h1>Jaqueta masculina retrô</h1>
                            <h4>89,99</h4>
                          <Link to="/carrinho"><input className={styles.btn02} type="button" value="Compre já"></input></Link>
                            </div>

                            <div className={styles.item02}><img src={calça02}></img>
                            <h1>Calça jeans vintage</h1>
                            <h4>69,99</h4>
                          <Link to="/carrinho"><input className={styles.btn02} type="button" value="Compre já"></input></Link>
                            </div>

                            <div className={styles.item02}><img src={calça03}></img>
                            <h1>Calça listrada + suspensório</h1>
                            <h4>109,99</h4>
                           <Link to="/carrinho"><input className={styles.btn02} type="button" value="Compre já"></input></Link>
                            </div>

                        </ItemsCarousel>
                    </div>
                    
                </div>
            </div>

            <div className={styles.promo}>
                <img src={promoção} alt="Poster de promoção"></img>
                <div className={styles.enunciado}>
                    <h4>Oferta limitada</h4>
                    <h1>35% off nesta quinta-feira e um presente especial</h1>
                <Link to="/produtos"><input type="buttom" value="garanta agora"></input></Link>
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
    )
}

export default Inicio