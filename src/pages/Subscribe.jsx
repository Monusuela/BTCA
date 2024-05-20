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

    // const SubscribeForm = () => {
    //     const [email, setEmail] = useState("")
    //     const [questions, setQuestions] = useState("")
    //     const [SubscribeStatus, setSubscribeStatus] = useState(null);

    //     //     const API = `iuRHCMCHoQ_Po3kDxiNqNA`;

    //     //     const SUBSCRIBE_URL = `https://api.convertkit.com/v3/forms/${API}/subscribe`

    //     //     const handleSubmit = async (event: React.FormEvent) => {
    //     //         event.preventDefault()

    //     //         const payload = JSON.stringify({
    //     //             email,
    //     //             first_questions: questions,
    //     //             api_key: process.env.GATSBY_CONVERTKIT_PUBLIC_API_KEY,
    //     //         })

    //     //         try {
    //     //             const response = await fetch(SUBSCRIBE_URL, {
    //     //                 method: "POST",
    //     //                 body: payload,
    //     //                 headers: {
    //     //                     Accept: "application/json; charset=utf-8",
    //     //                     "Content-Type": "application/json",
    //     //                 },
    //     //             })

    //     //             const json = await response.json()

    //     //             if (json?.subscription?.id) {
    //     //                 setStatus("SUCCESS")
    //     //                 return
    //     //             }
    //     //             etStatus("ERROR")
    //     //             Sentry.captureMessage("Error subscribing to newsletter", {
    //     //                 extra: json,
    //     //             })
    //     //         } catch (err) {
    //     //             setStatus("ERROR")
    //     //             console.error(err)
    //     //             Sentry.captureException(err)
    //     //         }
    //     //     }

    //     const handleEmailChange = (event) => {
    //         setEmail(event.target.value);
    //         // const { value } = event.target
    //         // setEmail(value)
    //     }

    //     const handleQuestionsChange = (event) => {
    //         setQuestions(event.target.value);
    //         // const { value } = event.target
    //         // setQuestions(value)
    //     }

    //     const handleSubmitClick = async () => {
    //         try {
    //             const response = await axios.post(`/api/subscribe`, {
    //                 email,
    //                 questions,
    //             })

    //             setSubscribeStatus("success");
    //             console.log('Subscribe successful!', response.data);
    //         } catch (error) {
    //             setSubscribeStatus("error");
    //             console.log('Failed to subscribe', response.data);
    //         }
    //     };

    //     let statusMessage = null;
    //     if (SubscribeStatus === "success") {
    //         statusMessage = <div>Subscribe successful! Please check your email to verify your account.</div>
    //     } else if (SubscribeStatus === "error") {
    //         statusMessage = <div>Failed to subscribe. Please try again.</div>;
    //     }



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
                                    style={{ width: "682px", height: "65px", background: "#ffffff21", color: "white" }} />
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
                                    style={{ width: "470px", height: "65px", background: "#ffffff21", color: "white" }} />
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
                                    {/* <form>
                                        <p style={{ color: "white", fontSize: "18px", paddingTop: "40px" }}>Ваша почта</p>
                                        <Input placeholder={"Начните ввод..."}
                                            type="email"
                                            onChange={handleEmailChange}
                                            value={email}
                                            className="Footer__widgets-input"
                                            style={{ width: "600px", height: "65px", background: "#ffffff21", marginTop: "10px" }}
                                        />
                                        <p style={{ color: "white", fontSize: "18px" }}>Ваш вопрос</p>
                                        <Input placeholder={"Начните ввод..."}

                                            type="text"
                                            onChange={handleQuestionsChange}
                                            value={questions}
                                            className="Footer__widgets-input"
                                            style={{ width: "600px", height: "179px", background: "#ffffff21", marginTop: "10px" }}
                                        />
                                        <div>
                                            <Button
                                                onClick={handleSubmitClick}
                                                style={{
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
                                            {statusMessage}
                                        </div>
                                    </form> */}
                                    {SubscribeForm()}
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
        )
    }
    // SubscribeForm();
// }

export default Subscribe;