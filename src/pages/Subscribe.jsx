import { Fragment, useState, setStatus, etStatus, Sentry } from "react"
import axios from "axios"
import Container from "../components/container"
import { Button, Col, Flex, Input, Row } from "antd"
import Title from "antd/es/skeleton/Title"
import { Link } from "react-router-dom"
import question from "../images/question.png"
import Frame from "../images/Frame.png"
import handquestion from "../images/handquestion.png"
import SubscribeForm from "../modules/SubscribeForm"




const Subscribe = () => {



    return (
        <Fragment>
            <section className="section__main-8">
                <Container className={"container__left"}>
                    <Flex className="banner2">
                        <Col span={11} className="banner2">
                            <h1 className="banner2-title-2">
                                Часто задаваемые вопросы
                            </h1>
                            <Input
                                placeholder={"Начните ввод..."}

                                className="banner2-input" />
                        </Col>

                        <div className="banner_img">
                            <img src={question} alt="error" />
                        </div>
                    </Flex>
                </Container>
                <Container>
                    <Flex className="answers" >
                        <div className="answers-info">
                            <div className="answers-info2">
                                <Button className="answers-info2-button1">Все</Button>
                                <Button className="answers-info2-button2">Функции аккаунта</Button>
                                <Button className="answers-info2-button3">Пополнение / Вывод криптовалюты</Button>
                                <Button className="answers-info2-button4">Безопасность</Button>
                            </div>
                            <Input
                                placeholder={"Начните ввод..."}
                                className="answers-info2-input" />
                        </div>
                    </Flex>
                    <Flex className={"container__left"} >

                        <Flex style={{
                            borderRadius: "16px",
                            width: "1309px",
                            height: "654px",
                            background: "rgb(13 13 13 / 15%)",
                            border: "1px solid rgb(145 140 140 / 15%)",
                            paddingTop: "40px",
                            paddingLeft: "60px"
                        }}>

                            <Col >

                                <h1 className="banner-title" style={{ width: "740px", fontSize: "42px" }}>Не нашли нужного ответа?</h1>
                                <p style={{ color: "gray", fontSize: "18px", paddingTop: "20px" }}>Задайте вопрос нам напрямую и мы ответим вам в течении 24 часов</p>

                                {SubscribeForm()}
                            </Col>

                            <div
                                style={{ marginLeft: "63px", marginTop: "120px" }} >
                                <img src={handquestion} alt="error"
                                />
                            </div>
                        </Flex>



                    </Flex>
                    <Flex  className="banner_img-2">
                        <img src={Frame} alt="error"/>
                    </Flex>
                </Container>
            </section>
        </Fragment>
    )
}
export default Subscribe;