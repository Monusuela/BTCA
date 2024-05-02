import { Fragment } from "react";
import Container from "../components/container";
import { Button, Col, Flex, Input, Row, Typography} from "antd";
import { TfiAndroid, TfiApple, TfiLinux } from "react-icons/tfi";
import { RiWindowsFill } from "react-icons/ri";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <Fragment>
            <footer>
                <Container>
                    <Row>
                        <Col>
                        <Title level={2}>rovas</Title>
                        <Flex>
                        <Button icon={<TfiAndroid/>}/>
                        <Button icon={<TfiApple/>}/>
                        <Button icon={<TfiLinux/>}/>
                        <Button icon={<RiWindowsFill/>}/>
                        </Flex>
                        <Title level={2}>Никогда не пропускайте обновления</Title>
                        <Flex>
                            <Input placeholder={"Ваш e-mail"}/>
                            <Button>Подписаться</Button>
                        </Flex>
                        <text>BTCA - это децентрализованная, одноранговая валюта с 
                        открытым исходным кодом, отличающаяся расширенными функциями конфиденциальности</text>
                        </Col>
                        <Col>
                        <Title level={3} className={`Footer__winget`}>BTCA</Title>
                        <ul className={`list-none Footer__widget-list`}>
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
                        <Title level={3} className={`Footer__winget`}>Ресурсы</Title>
                        <ul className={`list-none Footer__widget-list`}>
                            <li>
                                <Link to={"#"} className="Footer__winget-link">Кошельки</Link>
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
                        <Title level={3} className={`Footer__winget`}>Поддержка</Title>
                        <ul className={`list-none Footer__widget-list`}>
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
                </Container>
                <text>© 2019-2021 BTCA Community & BTCA Foundation</text>
                <text>Created by BTCA Community</text>
            </footer>
        </Fragment>
    )
}

export default Footer;