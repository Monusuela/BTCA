import { Fragment } from "react"
import Container from "../components/container"
import { Button, Col, Flex, Row } from "antd"
import Title from "antd/es/skeleton/Title"
import { Link } from "react-router-dom"
import chips from "../images/chips.png"

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
                                zIndex: "2", paddingTop: "610px", paddingLeft: "300px"
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
                           marginTop: "737px",
                           border: "1px solid white"
                        }}>
                           <Row style={{display: "flex", flexWrap: "wrap", color: "white", gap: "70px"}}>
                            <Col style={{width: "623px"}}>
                            <h1>Получить больше Владея малым</h1>
                            <p>Независимо от того, являетесь ли вы разработчиком, 
                                мерчантом, конечным пользователем или покупателем окон, 
                                мы приветствуем вас в сообществе BTCA.</p>
                            </Col>
                            <Col style={{width: "286px"}}>
                            <h1>Согласованное Время Блока</h1>
                            <img src="" alt="error"/>
                            <p>Фиксированный интервал между блоками составляет 
                                60 секунд. Протокол времени 2-ой версии значительно 
                                сокращает разброс фактического интервала между блоками.</p>
                            </Col>
                            <Col style={{width: "305px"}}>
                            <h1>Безопасная Сеть</h1>
                            <img src="" alt="error"/>
                            <p>Распределенная сеть отдельных узлов обеспечивает проверку каждой 
                                транзакции и блока, добавляемого в блокчейн, гарантируя, что блоки
                                 и транзакции действительны.</p>
                            </Col>
                            <Col style={{width: "332px"}}>
                            <h1>Меньшее потребление энергии</h1>
                            <img src="" alt="error"/>
                            <p>Фиксированный интервал между блоками составляет 60 секунд. 
                                Протокол времени 2-ой версии значительно сокращает разброс 
                                фактического интервала между блоками.</p>
                            </Col>
                            <Col style={{width: "286px"}}>
                            <h1>Честный Стекинг</h1>
                            <img src="" alt="error"/>
                            <p>У каждого UTXO есть шанс выиграть ставку 
                                с линейным снижением сложности в зависимости от ценности UTXO. </p>
                            </Col>
                           </Row>

                        </Flex>


                    </Flex>

                </Container>


            </section>
        </Fragment>
    )
}

export default ProofOfStake;