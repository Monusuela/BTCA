import { Fragment} from "react"
import Container from "../components/container"
import { Button, Col, Flex, Input } from "antd"
import question from "../images/question.png"
import Frame from "../images/Frame.png"
import handquestion from "../images/handquestion.png"
import QuestionsForm from "../modules/QuestionsForm"




const Questions = () => {



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

                        <Flex className="casket">

                            <Col >

                                <h1 className="casket-title">Не нашли нужного ответа?</h1>
                                <p className="casket-text">Задайте вопрос нам напрямую и мы ответим вам в течении 24 часов</p>

                                {QuestionsForm()}
                            </Col>

                            <div className="casket-img">
                                <img src={handquestion} alt="error"
                                />
                            </div>
                        </Flex>



                    </Flex>
                    <Flex  className="banner_img-2">
                        <img src={Frame} alt="error"
                        className="banner_img-fr"/>
                    </Flex>
                </Container>
            </section>
        </Fragment>
    )
}
export default Questions;