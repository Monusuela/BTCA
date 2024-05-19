import { Fragment, useState, setStatus, etStatus, Sentry } from "react"
import Container from "../components/container"
import { Button, Col, Flex, Input, Row } from "antd"
import Title from "antd/es/skeleton/Title"
import { Link } from "react-router-dom"
import question from "../images/question.png"
import Frame from "../images/Frame.png"
import handquestion from "../images/handquestion.png"

const Subscribe = () => {

    const SubscribeForm = () => {
        const [email, setEmail] = useState("")
        const [questions, setQuestions] = useState("")

        const SUBSCRIBE_URL = `https://api.convertkit.com/v3/forms/iuRHCMCHoQ_Po3kDxiNqNA/subscribe`

        const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault()

            const payload = JSON.stringify({
                email,
                first_questions: questions,
                api_key: process.env.GATSBY_CONVERTKIT_PUBLIC_API_KEY,
            })

            try {
                const response = await fetch(SUBSCRIBE_URL, {
                    method: "POST",
                    body: payload,
                    headers: {
                        Accept: "application/json; charset=utf-8",
                        "Content-Type": "application/json",
                    },
                })

                const json = await response.json()

                if (json?.subscription?.id) {
                    setStatus("SUCCESS")
                    return
                }
                etStatus("ERROR")
                Sentry.captureMessage("Error subscribing to newsletter", {
                    extra: json,
                })
            } catch (err) {
                setStatus("ERROR")
                console.error(err)
                Sentry.captureException(err)
            }
        }

        const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target
            setEmail(value)
        }

        const handleQuestionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target
            setQuestions(value)
        }

    

    return (
        <Fragment>
            <section className="section__main-1" style={{ background: "rgb(3 4 16)", height: "1650px" }}>
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <Col span={11} className="banner">
                            <h1 className="banner-title" style={{ width: "595px" }}>
                                Часто задаваемые вопросы
                            </h1>
                            <Input
                                placeholder={"Начните ввод..."}

                                className="Footer__widgets-input"
                                style={{ width: "682px", height: "65px", background: "#ffffff21" }} />
                        </Col>

                        <div className="Home_header_img">
                            <img src={question} alt="error"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    position: "absolute",
                                    top: "110px",
                                }} />
                        </div>
                    </Flex>
                </Container>
                <Container>
                    <Flex style={{ margin: "415px 300px 50px 248px" }} >
                        <div className="">
                            <div className="" style={{ display: "flex", gap: "30px" }}>
                                <Button style={{
                                    background: "#1D9A6D",
                                    borderRadius: "37px",
                                    padding: "9px 41px",
                                    width: "118px",
                                    height: "50px",
                                    fontSize: "18px",
                                    border: "1px solid #1D9A6D",
                                    color: "white"
                                }}>Все</Button>
                                <Button style={{
                                    background: "#1A204A",
                                    borderRadius: "37px",
                                    padding: "9px 41px",
                                    width: "231px",
                                    height: "50px",
                                    fontSize: "18px",
                                    border: "1px solid #1A204A",
                                    color: "white"
                                }}>Функции аккаунта</Button>
                                <Button style={{
                                    background: "#1A204A",
                                    borderRadius: "37px",
                                    padding: "9px 41px",
                                    width: "389px",
                                    height: "50px",
                                    fontSize: "18px",
                                    border: "1px solid #1A204A",
                                    color: "white"
                                }}>Пополнение / Вывод криптовалюты</Button>
                                <Button style={{
                                    background: "#1A204A",
                                    borderRadius: "37px",
                                    padding: "9px 41px",
                                    width: "197px",
                                    height: "50px",
                                    fontSize: "18px",
                                    border: "1px solid #1A204A",
                                    color: "white"
                                }}>Безопасность</Button>
                            </div>
                            <Input
                                placeholder={"Начните ввод..."}
                                className="Footer__widgets-input"
                                style={{ width: "470px", height: "65px", background: "#ffffff21" }} />
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
                                <form onSubmit={handleSubmit}>
                                    <p style={{ color: "white", fontSize: "18px", paddingTop: "40px" }}>Ваша почта</p>
                                    <Input placeholder={"Начните ввод..."}
                                        aria-label="Начните ввод..."
                                        name="email_address"
                                        required
                                        type="email"
                                        onChange={handleEmailChange}
                                        value={email}
                                        className="Footer__widgets-input"
                                        style={{ width: "600px", height: "65px", background: "#ffffff21", marginTop: "10px" }}
                                    />
                                    <p style={{ color: "white", fontSize: "18px" }}>Ваш вопрос</p>
                                    <Input placeholder={"Начните ввод..."}
                                        aria-label="Начните ввод..."
                                        name="fields[first_questions]"
                                        type="text"
                                        onChange={handleQuestionsChange}
                                        value={questions}
                                        className="Footer__widgets-input"
                                        style={{ width: "600px", height: "179px", background: "#ffffff21", marginTop: "10px" }}
                                    />
                                    <div>
                                        <Button style={{
                                            background: "#1D9A6D",
                                            borderRadius: "12px",
                                            padding: "10px 24px",
                                            width: "134px",
                                            height: "50px",
                                            fontSize: "16px",
                                            border: "1px solid #1D9A6D",
                                            color: "white",
                                            marginTop: "20px"
                                        }}>Отправить</Button>
                                    </div>
                                </form>
                            </Col>

                            <div
                                style={{ marginLeft: "63px", marginTop: "120px" }} >
                                <img src={handquestion} alt="error"
                                />
                            </div>
                        </Flex>



                    </Flex>
                    <Flex>
                        <img src={Frame} alt="error"
                            style={{
                                marginTop: "-270px"
                            }} />
                    </Flex>
                </Container>
            </section>
        </Fragment>
    )}
}

export default Subscribe;