import { Fragment } from "react"
import Container from "../components/container"
import { Button, Col, Flex, Input, Row } from "antd"
import Title from "antd/es/skeleton/Title"
import { Link } from "react-router-dom"
import chips from "../images/chips.png"
import Icon1 from "../images/ikon/Frame 118.png"
import Icon2 from "../images/ikon/Frame 117.png"
import Icon3 from "../images/ikon/Frame 116.png"
import Icon4 from "../images/ikon/Frame 115.png"
import Frame from "../images/Frame.png"
import ControlledAccordions from "../components/Category"
import { BsArrowRightSquareFill } from "react-icons/bs"

const ProofOfStake = () => {
    return (
        <Fragment>

            <section className="section__main-5">
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <Col span={11} className="banner">
                            <h1 className="banner-title" style={{ width: "595px" }}>
                                Proof of Stake
                            </h1>
                            <p style={{ width: "550px", fontSize: "18px" }}>
                                Получайте вознаграждения за безопасность сети BTCA,
                                просто храня монеты в своем кошельке.
                            </p>
                        </Col>

                        <div className="Home_header_img">

                            <img
                                src={chips}
                                alt="error"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    position: "absolute",
                                    top: "300px",
                                }}
                            />
                        </div>
                    </Flex>
                    <Flex>
                        <div>
                            <h1 style={{
                                color: "#ffffff0e", fontSize: "200px",
                                zIndex: "2", paddingTop: "560px", paddingLeft: "300px"
                            }}>
                                Increase
                            </h1>
                        </div>

                        <Flex style={{
                            borderRadius: "16px",
                            width: "1109px",
                            height: "543px",
                            background: "rgb(145 140 140 / 15%)",
                            marginLeft: "-950px",
                            marginTop: "690px",
                            border: "1px solid rgb(145 140 140 / 15%)"
                        }}>
                            <Row style={{ display: "flex", flexWrap: "wrap", color: "white", paddingTop: "25px", paddingLeft: "25px" }}>
                                <Col style={{ width: "623px" }}>
                                    <h1 style={{ fontSize: "42px" }}>Получить больше Владея малым</h1>
                                    <p style={{ fontSize: "16px", width: "500px" }}>Независимо от того, являетесь ли вы разработчиком,
                                        мерчантом, конечным пользователем или покупателем окон,
                                        мы приветствуем вас в сообществе BTCA.</p>
                                </Col>
                                <Col style={{ width: "442px", paddingLeft: "123px" }}>
                                    <div style={{ display: "flex" }}>
                                        <h1>Согласованное Время Блока</h1>
                                        <img src={Icon1} alt="error" />
                                    </div>
                                    <p style={{ fontSize: "16px" }}>Фиксированный интервал между блоками составляет
                                        60 секунд. Протокол времени 2-ой версии значительно
                                        сокращает разброс фактического интервала между блоками.</p>
                                </Col>
                                <Flex style={{ gap: "50px" }}>
                                    <Col style={{ width: "305px", Top: "-70px" }}>
                                        <div style={{ display: "flex" }}>
                                            <h1>Безопасная Сеть</h1>
                                            <img src={Icon2} alt="error" />
                                        </div>

                                        <p style={{ fontSize: "16px" }}>Распределенная сеть отдельных узлов обеспечивает проверку каждой
                                            транзакции и блока, добавляемого в блокчейн, гарантируя, что блоки
                                            и транзакции действительны.</p>
                                    </Col>
                                    <Col style={{ width: "332px" }}>
                                        <div style={{ display: "flex" }}>
                                            <h1>Меньшее потребление энергии</h1>
                                            <img src={Icon3} alt="error" />
                                        </div>

                                        <p style={{ fontSize: "16px" }}>Фиксированный интервал между блоками составляет 60 секунд.
                                            Протокол времени 2-ой версии значительно сокращает разброс
                                            фактического интервала между блоками.</p>
                                    </Col>
                                    <Col style={{ width: "286px" }}>
                                        <div style={{ display: "flex" }}>
                                            <h1>Честный Стекинг</h1>
                                            <img src={Icon4} alt="error" />
                                        </div>

                                        <p style={{ fontSize: "16px" }}>У каждого UTXO есть шанс выиграть ставку
                                            с линейным снижением сложности в зависимости от ценности UTXO. </p>
                                    </Col>
                                </Flex>
                            </Row>

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
            <section className="section__main-6">

            </section>
            <section className="section__main-7">
                <Container>
                <Flex className="Steps" justify="center">
            <div>
              <h1 className="Steps__info-title">Документация</h1>
              <p className="Steps__info-text">
              Ищете более подробную информацию или инструкции? Нет проблем. Мы об этом позаботились.
              </p>
            </div>
            
          </Flex>
          <Flex style={{marginLeft: "250px"}}>
          <Row className="Steps__Registration" style={{marginBottom: "80px"}}>
              <Col className="Registration__getting" style={{paddingLeft: "30px", height: "210px"}}>

                <h1
                  className="Registration__getting-title"
                  style={{ color: "white", fontSize: "32px", width: "211px", paddingTop: "20px"}}
                >
                  BTCA Proof of Stake
                </h1>
                <p className="Registration__getting-text" style={{fontSize: "16px"}}>Введение в BTCA Proof of Stake</p>
                  <Link style={{color: "grey", paddingTop: "20px", textAlign: "center"}}>Перейти <BsArrowRightSquareFill style={{marginLeft: "30px"}}/></Link>
              
              </Col>
              <Col className="Registration__getting" style={{paddingLeft: "30px", height: "210px"}}>

                <h1
                  className="Registration__getting-title"
                  style={{ color: "white", fontSize: "32px", width: "211px", paddingTop: "20px"}}
                >
                  Требования к стекингу
                </h1>
                <p className="Registration__getting-text" style={{fontSize: "16px"}}>Что вам необходимо для стекинга</p>
                  <Link style={{color: "grey", paddingTop: "20px", textAlign: "center"}}>Перейти <BsArrowRightSquareFill style={{marginLeft: "30px"}}/></Link>
              
              </Col>
              <Col className="Registration__getting" style={{paddingLeft: "30px", height: "210px"}}>

                <h1
                  className="Registration__getting-title"
                  style={{ color: "white", fontSize: "32px", width: "211px", paddingTop: "20px"}}
                >
                 Требования стекинга
                </h1>
                <p className="Registration__getting-text" style={{fontSize: "16px"}}>Как запустить стекинг</p>
                  <Link style={{color: "grey", paddingTop: "20px", textAlign: "center"}}>Перейти <BsArrowRightSquareFill style={{marginLeft: "30px"}}/></Link>
              
              </Col>
            </Row>
          </Flex>

                    <div className="">
                        <div className="">
                            {ControlledAccordions()}
                        </div>
                    </div>

                    <Flex className="Block-area">
                        <Col>
                            <h1 className="Block-area-title" style={{fontSize: "42px"}}>
                                Никогда не пропускайте обновления
                            </h1>
                            <p className="Block-area-text">
                                Подпишитесь на информационный бюллетень и будьте первым, кто
                                получит новейшие оповещения, объявления и обновления о
                                разработках BTCA.
                            </p>
                            <Flex>
                                <Input
                                    placeholder={"Ваш e-mail"}
                                    className="Footer__widgets-input"
                                    style={{ width: "600px", height: "65px" }}
                                />
                                <Button
                                    className="Footer__widgets-button"
                                    style={{
                                        width: "150px",
                                        height: "50px",
                                        marginLeft: "-160px",
                                    }}
                                >
                                    <Link to="/subscribe">Подписаться</Link>
                                </Button>
                            </Flex>
                        </Col>
                    </Flex>
                </Container>
            </section>
        </Fragment>
    )
}

export default ProofOfStake;