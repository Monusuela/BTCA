import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Button, Col, Flex, Row } from "antd"
import dowload from "../images/dowload.png"
import abstract from "../images/3Dabstract.png"

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

                    <Flex className="Steps2">
                        <div>
                            <h1 className="Steps2__info-title">SETUP</h1>

                        </div>

                    </Flex>

                    <Flex className="Regiration3">
                        <Row className="Steps__Registration2">
                            <Col className="Registration__getting3">

                                <div>
                                    <div>
                                        <Button>
                                            <img
                                                // src={}
                                                alt="error"
                                            />
                                            Скачать кошелек BTCA
                                        </Button>
                                        <p>v5.3.0 Установщик для 64-разрядной версии Windows</p>
                                    </div>
                                </div>

                                <h1 className="Registration__getting-title2">
                                Установите BTCA Core Wallet
                                </h1>
                                <p className="Registration__getting-1-text3">
                                Загрузите и установите кошелек BTCA Core Wallet, подходящий для вашей операционной системы.
                                </p>

                            </Col>
                            <Col className="Registration__getting3">
                                <div>
                                    <img
                                        // src={}
                                        alt="error"
                                    />
                                </div>
                                <h1 className="Registration__getting-title2">
                                Создать адрес SHIELD
                                </h1>
                                <p className="Registration__getting-1-text3">
                                Создайте защищенный или прозрачный адрес, по которому вы хотите получать свои чаевые </p>
                            </Col>
                            <Col className="Registration__getting3">
                                <div>
                                    <img
                                        // src={}
                                        alt="error"
                                    />
                                </div>
                                <h1 className="Registration__getting-title2">
                                Опубликовать адрес SHIELD
                                </h1>
                                <p className="Registration__getting-1-text3">
                                Опубликуйте QR-код или текст вашего защищенного или прозрачного адреса, который вы создали. </p>
                            </Col>

                        </Row>
                    </Flex>
                </Container>
            </section>
            <section className="section__main-5">
                <Container className={"container-4"}>

                    <Flex className="Steps2">
                        <div>
                            <h1 className="Steps2__info-title">SEND</h1>

                        </div>

                    </Flex>

                    <Flex className="Regiration3">
                        <Row className="Steps__Registration2">
                            <Col className="Registration__getting3">

                                <div>
                                    <img
                                        // src={}
                                        alt="error"
                                    />
                                </div>

                                <h1 className="Registration__getting-title2">
                                Копировать адрес SHIELD
                                </h1>
                                <p className="Registration__getting-1-text3">
                                Отсканируйте QR-код или скопируйте текстовый адрес получателя, которому хотите дать чаевые.
                                </p>

                            </Col>
                            <Col className="Registration__getting3">
                                <div>
                                    <img
                                        // src={}
                                        alt="error"
                                    />
                                </div>
                                <h1 className="Registration__getting-title2">
                                Вставить в кошелек BTCA
                                </h1>
                                <p className="Registration__getting-1-text3">
                                Вставьте текстовый адрес в экран SEND вашего кошелька BTCA Core. </p>
                            </Col>
                            <Col className="Registration__getting3">
                                <div>
                                    <img
                                        // src={}
                                        alt="error"
                                    />
                                </div>
                                <h1 className="Registration__getting-title2">
                                Добавить личное сообщение
                                </h1>
                                <p className="Registration__getting-1-text3">
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
                            <Col className="Registration__getting3">

                                <div>
                                    <img
                                        // src={}
                                        alt="error"
                                    />
                                </div>

                                <h1 className="Registration__getting-title2">
                                Откройте кошелек BTCA Core 
                                </h1>
                                <p className="Registration__getting-1-text3">
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