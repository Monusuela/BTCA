import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Button, Col, Flex, Row } from "antd"
import dowload from "../images/dowload.png"
import abstract from "../images/3Dabstract.png"
import setup1 from "../images/decstop/setup1.png"
import setup2 from "../images/decstop/setup2.png"
import send1 from "../images/decstop/send1.png"
import send2 from "../images/decstop/send2.png"
import send3 from "../images/decstop/send3.png"
import receive from "../images/decstop/receive.png"

const Decstop = () => {
    return (
        <Fragment>
            <section className="section__main-1">
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <Col span={11} className="banner">
                            <h1 className="banner-title">
                                About decstop app
                            </h1>
                            <p className="banner-text">
                                Keep up with the newest technologies and start accepting new sources of revenue
                                from a global community of PIVX users.

                            </p>
                        </Col>

                        <div className="Home_header_img">
                            <img className="Home_header_img-abs"
                                src={abstract}
                                alt="error" />
                            <img className="Home_header_img-bitcoin"
                                src={dowload}
                                alt="error"
                            />
                        </div>
                    </Flex>
                </Container>
                <Container className={"container-2"}>

                    <Flex className="Steps3">
                        <div>
                            <h1 className="Steps2__info-title">SETUP</h1>

                        </div>

                    </Flex>

                    <Flex className="Regiration3">
                        <Row className="Steps__Registration2">
                            <Col className="Registration__getting6">

                                <div>
                                    <div>
                                        <Button className="Registration__getting6-button">
                                            <img
                                                // src={}
                                                alt="error"
                                            />
                                            Скачать кошелек BTCA
                                        </Button>
                                        <p className="Registration__getting6-text">v5.3.0 Установщик для 64-разрядной версии Windows</p>
                                    </div>
                                </div>

                                <h1 className="Registration__getting-title5">
                                Установите BTCA Core Wallet
                                </h1>
                                <p className="Registration__getting-1-text5">
                                Загрузите и установите кошелек BTCA Core Wallet, подходящий для вашей операционной системы.
                                </p>

                            </Col>
                            <Col className="Registration__getting6">
                                <div>
                                    <img
                                        src={setup1}
                                        alt="error"
                                    />
                                </div>
                                <h1 className="Registration__getting-title5">
                                Создать адрес SHIELD
                                </h1>
                                <p className="Registration__getting-1-text5">
                                Создайте защищенный или прозрачный адрес, по которому вы хотите получать свои чаевые </p>
                            </Col>
                            <Col className="Registration__getting6">
                                <div>
                                    <img
                                        src={setup2}
                                        alt="error"
                                    />
                                </div>
                                <h1 className="Registration__getting-title5">
                                Опубликовать адрес SHIELD
                                </h1>
                                <p className="Registration__getting-1-text5">
                                Опубликуйте QR-код или текст вашего защищенного или прозрачного адреса, который вы создали. </p>
                            </Col>

                        </Row>
                    </Flex>
                </Container>
            </section>
            <section className="section__main-9">
                <Container className={"container-4"}>

                    <Flex className="Steps2">
                        <div>
                            <h1 className="Steps2__info-title">SEND</h1>

                        </div>

                    </Flex>

                    <Flex className="Regiration3">
                        <Row className="Steps__Registration2">
                            <Col className="Registration__getting6">

                                <div>
                                    <img
                                        src={send1}
                                        alt="error"
                                    />
                                </div>

                                <h1 className="Registration__getting-title5">
                                Копировать адрес SHIELD
                                </h1>
                                <p className="Registration__getting-1-text5">
                                Отсканируйте QR-код или скопируйте текстовый адрес получателя, которому хотите дать чаевые.
                                </p>

                            </Col>
                            <Col className="Registration__getting6">
                                <div>
                                    <img
                                        src={send2}
                                        alt="error"
                                    />
                                </div>
                                <h1 className="Registration__getting-title5">
                                Вставить в кошелек BTCA
                                </h1>
                                <p className="Registration__getting-1-text5">
                                Вставьте текстовый адрес в экран SEND вашего кошелька BTCA Core. </p>
                            </Col>
                            <Col className="Registration__getting6">
                                <div>
                                    <img
                                        src={send3}
                                        alt="error"
                                    />
                                </div>
                                <h1 className="Registration__getting-title5">
                                Добавить личное сообщение
                                </h1>
                                <p className="Registration__getting-1-text5">
                                Если вы даете чаевые, используя защищенный адрес, вы можете прикрепить 
                                короткое сообщение, используя зашифрованную заметку. </p>
                            </Col>

                        </Row>
                    </Flex>
                </Container>
                <Container className={"container-2"}>

                    <Flex className="Steps2">
                        <div>
                            <h1 className="Steps2__info-title">RECEIVE</h1>

                        </div>

                    </Flex>

                    <Flex className="Regiration3">
                        <Row className="Steps__Registration2">
                            <Col className="Registration__getting6">

                                <div>
                                    <img
                                        src={receive}
                                        alt="error"
                                    />
                                </div>

                                <h1 className="Registration__getting-title5">
                                Откройте кошелек BTCA Core 
                                </h1>
                                <p className="Registration__getting-1-text5">
                                Откройте кошелек BTCA Core Wallet и нажмите на полученные советы, 
                                чтобы просмотреть зашифрованные заметки.
                                </p>

                            </Col>
                        </Row>
                    </Flex>
                </Container>
            </section>
            <section className="section__main-7">

                <Container>
                    <div>
                        {Subscribe()}
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default Decstop