import { Fragment } from "react";
import Container from "../components/container";
import "./layout.scss";
import { Button, Col, Flex, Input, Row, Typography} from "antd";
import { TfiAndroid, TfiApple, TfiLinux } from "react-icons/tfi";
import { RiWindowsFill } from "react-icons/ri";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <Fragment>
            <footer className="Footer">
                <Container className={Footer}>
                    <Row className="Footer__widgets">
                        <Col  className={`Footer__widget Footer__widget--other`} style={{width: "430px"}}>
                        <Title level={2} className={`Footer__widget`} style={{color: "white"}}>rovas</Title>
                        
                        <Flex style={{gap: "20px", paddingTop: "25px", paddingBottom: "25px"}}>
                        <TfiAndroid style={{background: "#151822", color:"#636D85", transform: "scale(1.8)"}}/>
                        <TfiApple style={{background: "#151822", color:"#636D85", transform: "scale(1.8)"}}/>
                        <TfiLinux  style={{background: "#151822", color:"#636D85", transform: "scale(1.8)"}}/>
                        <RiWindowsFill style={{background: "#151822", color:"#636D85", transform: "scale(1.8)"}}/>
                        </Flex>
                        <Title level={3} className="gradient-text">Никогда не пропускайте обновления</Title>
                        <Flex>
                            <Input placeholder={"Ваш e-mail"}  className="Footer__widgets-input"/>
                            <Button className="Footer__widgets-button"><Link>Подписаться</Link></Button>
                        </Flex>
                        <text className="Footer__winget-link">BTCA - это децентрализованная, одноранговая валюта с 
                        открытым исходным кодом,  отличающаяся расширенными функциями конфиденциальности</text>
                        </Col>
                        <Col>
                        <Title level={3} className={`Footer__winget`} style={{color: "white"}}>BTCA</Title>
                       
                        <ul className={`list-none Footer__winget-list`}>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Получить PIVX</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Конфиденциальность Shield</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Продвинутый PoS</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Холодный Стекинг</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Мастерноды</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Управление</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Экономика</Link>
                            </li>
                        </ul>
                        </Col>

                        <Col>
                        <Title level={3} className={`Footer__winget`} style={{color: "white"}}>Ресурсы</Title>
                       
                        <ul className={`list-none Footer__winget-list`}>
                            <li>
                                
                                <Link to={"#"} className="Footer__winget-link" >Кошельки</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Coin Specs</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Обозреватель блоков</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Statistics</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Инфопанель</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Новости</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Дорожная Карта</Link>
                            </li>
                        </ul>
                        </Col>

                        <Col>
                        <Title level={3} className={`Footer__winget`} style={{color: "white"}}>Поддержка</Title>
                        
                        <ul className={`list-none Footer__winget-list`}>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Руководства</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Форум</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Почему BTCA</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Контакты</Link>
                            </li>
                        </ul>
                        </Col>
                    </Row>
                    <Flex className="Footer__winget-end">
                <text className="Footer__winget-link"> 2019-2021 BTCA Community & BTCA Foundation</text>
                <text className="Footer__winget-link">Created by BTCA Community</text>
                </Flex>
                </Container>
                
            </footer>
        </Fragment>
    )
}

export default Footer;