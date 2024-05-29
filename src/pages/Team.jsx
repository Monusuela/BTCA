import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Button, Col, Flex, Row } from "antd"

const Team = () => {
    return (
        <Fragment>
            <section className="section__main-1">
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <Col span={11} className="banner">
                            <h1 className="banner-title">
                                О BTCA
                            </h1>
                            <p className="banner-text">
                                Исследуйте, вносите вклад и влияйте на будущее развитие вместе с
                                BTCA и его процветающим глобальным сообществом.
                            </p>
                        </Col>

                        <div className="Home_header_img">
                            <img className="Home_header_img-bitcoin"
                                // src={}
                                alt="error"
                            />
                        </div>
                    </Flex>
                </Container>
                <Container className={"container-2"}>

                    <Flex className="Steps2">
                        <div>
                            <h1 className="Steps2__info-title">BTCA</h1>
                            <p className="Steps2__info-text">
                                Архитекторы блокчейна, самые опытные в мире разработчики блокчейна с
                                проверенным опытом, расширяют границы, предоставляя самые инновационные
                                технологии для BTCA
                            </p>
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
                                    furszy
                                </h1>
                                <p className="Registration__getting-1-text3">
                                    LEAD DEVELOPER </p>
                                <div>
                                    <div>
                                        <div>
                                            <img
                                                // src={}
                                                alt="error"
                                            />
                                            <p>furszy#2640</p>
                                        </div>
                                        <div>
                                            <img
                                                // src={}
                                                alt="error"
                                            />
                                            <img
                                                // src={}
                                                alt="error"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Flex>
                </Container>
            </section>
            <section className="section__main-5">
                <Container className={"container-3"}>
                    <Flex className="Steps2">
                        <div>
                            <h1 className="Steps2__info-title">BTCA</h1>
                            <p className="Steps2__info-text">
                                Основная команда - это сердце проекта, на котором зиждется неуклонное развитие и рост BTCA.
                            </p>
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
                                Bryan Doreian
                                </h1>
                                <p className="Registration__getting-1-text3">
                                BUSINESS DEVELOPMENT, AMBASSADOR </p>
                                <div>
                                    <div>
                                        <div>
                                            <img
                                                // src={}
                                                alt="error"
                                            />
                                            <p>SnappySnap#8204</p>
                                        </div>
                                        <div>
                                            <img
                                                // src={}
                                                alt="error"
                                            />
                                            <img
                                                // src={}
                                                alt="error"
                                            />
                                        </div>
                                    </div>
                                </div>
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

export default Team