import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Button, Col, Flex, Row } from "antd"
import android from "../images/android.png"
import appStore from "../images/app-store.png"
import googlePlay from "../images/google-play.png"
import qr from "../images/QR.png"
import { Link } from "react-router-dom"

const Mobile = () => {
    return (
        <Fragment>
            <section className="section__main-1">
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <Col span={11} className="banner">
                            <h1 className="banner-title">
                            Торгуйте везде
                            </h1>
                            <p className="banner-text">
                            Имея одну из самых талантливых команд в отрасли, BTCA зарекомендовала 
                            себя как выпуск первых в своем роде инноваций.
                            </p>
                        </Col>

                        <div className="Home_header_img">
                            <Col className="Registration__getting5">
                                <div className="Registration__getting-img3">
                                    <img
                                        src={android}
                                        alt="error"
                                    />
                                </div>
                                <h1 className="Registration__getting-title2">
                                    STABLE RELEASE
                                </h1>
                                <div>
                                    <div className="ul-lists">
                                        <ul className="ul-list">
                                            <li>
                                                <img
                                                    className="list-img"
                                                    src={appStore}
                                                    alt="error"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    className="list-img"
                                                    src={qr}
                                                    alt="error"
                                                />
                                            </li>
                                            <li>
                                                <p className="Registration__getting-1-text3">Для iOS и Android</p>

                                            </li>
                                        </ul>
                                        <ul className="ul-list">
                                            <li>
                                                <img
                                                    className="list-img"
                                                    src={googlePlay}
                                                    alt="error"
                                                />
                                            </li>
                                            <li>
                                                <Button className="Registration__getting-button3">
                                                    <Link to={"https://apkpure.com/ru/apkpure/com.apkpure.aegon"}>
                                                        APK
                                                    </Link>

                                                </Button>
                                            </li>
                                            <li>
                                                <p className="Registration__getting-1-text3">Скачать APK (только для  Android)</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Flex>
                </Container>
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <Col span={11} className="banner">
                            <h1 className="banner-title">
                            Щиток приборов
                            </h1>
                            <p className="banner-text">
                            Lorem Ipsum - это просто фиктивный текст полиграфической и наборной индустрии. 
                            Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный 
                            типограф взял камбуз шрифта и скремблировал его, чтобы сделать книгу образцов шрифта. 
                            Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. 
                            </p>
                            <p className="banner-text">
                            Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, 
                            а в последнее время - с помощью программного обеспечения для настольных издательских систем, 
                            такого как Aldus PageMaker, включая версии Lorem Ipsum.
                            </p>
                        </Col>

                        <div className="Home_header_img">
                            <img className="Home_header_img-abs"
                                // src={}
                                alt="error" />
                            <img className="Home_header_img-bitcoin"
                                // src={}
                                alt="error"
                            />
                        </div>
                    </Flex>
                </Container>
            </section>
            <section className="section__main-1">
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <div className="Home_header_img">
                            <img className="Home_header_img-abs"
                                // src={}
                                alt="error" />
                            <img className="Home_header_img-bitcoin"
                                // src={}
                                alt="error"
                            />
                        </div>
                        <Col span={11} className="banner">
                            <h1 className="banner-title">
                                Встряхните, чтобы заплатить
                            </h1>
                            <p className="banner-text">
                            Lorem Ipsum - это просто фиктивный текст полиграфической и наборной индустрии. 
                            Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный 
                            типограф взял камбуз шрифта и скремблировал его, чтобы сделать книгу образцов шрифта. 
                            Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. 
                            </p>
                            <p className="banner-text">
                            Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, 
                            а в последнее время - с помощью программного обеспечения для настольных издательских систем, 
                            такого как Aldus PageMaker, включая версии Lorem Ipsum.
                            </p>
                        </Col>


                    </Flex>
                </Container>
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <Col span={11} className="banner">
                            <h1 className="banner-title">
                            Запрос
                            </h1>
                            <p className="banner-text">
                            Lorem Ipsum - это просто фиктивный текст полиграфической и наборной индустрии. 
                            Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный 
                            типограф взял камбуз шрифта и скремблировал его, чтобы сделать книгу образцов шрифта. 
                            Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. 
                            </p>
                            <p className="banner-text">
                            Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, 
                            а в последнее время - с помощью программного обеспечения для настольных издательских систем, 
                            такого как Aldus PageMaker, включая версии Lorem Ipsum.
                            </p>
                        </Col>

                        <div className="Home_header_img">
                            <img className="Home_header_img-abs"
                                // src={}
                                alt="error" />
                            <img className="Home_header_img-bitcoin"
                                // src={}
                                alt="error"
                            />
                        </div>
                    </Flex>
                </Container>
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <div className="Home_header_img">
                            <img className="Home_header_img-abs"
                                // src={}
                                alt="error" />
                            <img className="Home_header_img-bitcoin"
                                // src={}
                                alt="error"
                            />
                        </div>
                        <Col span={11} className="banner">
                            <h1 className="banner-title">
                            Добавить примечание к транзакции
                            </h1>
                            <p className="banner-text">
                            Lorem Ipsum - это просто фиктивный текст полиграфической и наборной индустрии. 
                            Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный 
                            типограф взял камбуз шрифта и скремблировал его, чтобы сделать книгу образцов шрифта. 
                            Он пережил не только пять веков, но и скачок в электронный набор, оставшись практически неизменным. 
                            </p>
                            <p className="banner-text">
                            Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem Ipsum, 
                            а в последнее время - с помощью программного обеспечения для настольных издательских систем, 
                            такого как Aldus PageMaker, включая версии Lorem Ipsum.
                            </p>
                            <div>
                                <Button>
                                <img
                                // src={}
                                alt="error"
                                />
                                Скачать кошелек BTCA
                                </Button>
                            </div>
                        </Col>


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

export default Mobile