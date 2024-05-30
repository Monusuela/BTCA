import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Button, Col, Flex, Row } from "antd"
import Frame from "../images/Frame.png"
import btca from "../images/btca.png"

const Documents = () => {
  return (
    <Fragment>
      <section className="section__main-5">
        <Container className={"container__left4"}>
          <Flex className="banner-2" style={{ color: "#fff" }}>
            <Col span={11} className="banner-2">
              <h1 className="banner-2-title">
                BTCA
              </h1>
              <p className="banner-2-text">
                Здесь подробно описаны некоторые академические документы о BTCA,
                его денежно-кредитной политике и многом другом.
              </p>
            </Col>

            <div className="Home_header_img2">

              <img
                src={btca}
                alt="error"
              />
            </div>
          </Flex>
        </Container>
        <Container className={"container-2"}>
          <div className="case-title">
            <h1>
              Increase
            </h1>
          </div>
          <Flex className="Steps2">
            <div>
              <h1 className="Steps2__info-title">Whitepaper</h1>
              <p className="Steps2__info-text">
              Прочтите (в нетехнической манере) самую свежую информацию о BTCA. Официальный академический технический 
              документ, который должен быть выпущен основными разработчиками, когда позволит время.
              </p>
            </div>

          </Flex>

          <Flex className="Regiration3">
            <Row className="Steps__Registration2">
              <Col className="Registration__getting6">

                <h1 className="Registration__getting-title6">
                С материалами для СМИ
                </h1>
                <p className="Registration__getting-1-text3">
                Выбирайте, печатайте и размещайте предпочтительные материалы для вашего местного бизнеса.
                </p>
                <div className="button-content">
                    <Button className="Registration__getting-button6">
                    <img
                    // src={}
                    alt="error"
                    />
                    Скачать PDF
                    </Button>
                  </div>
              </Col>
              <Col className="Registration__getting6">

                <h1 className="Registration__getting-title6">
                По Экономике BTCA
                </h1>
                <p className="Registration__getting-1-text3">
                Ознакомьтесь с академической документацией об экономике монет BTCA, 
                ее денежно-кредитной политике и экономических факторах, стоящих за монетой. </p>

                  <div className="button-content">
                    <Button className="Registration__getting-button5">
                    <img
                    // src={}
                    alt="error"
                    />
                      Скачать PDF
                    </Button>
                  </div>
              </Col>
              <Col className="Registration__getting6">

                <h1 className="Registration__getting-title6">
                Развития
                </h1>
                <p className="Registration__getting-1-text3">
                Дорожная карта развития предоставляет подробную информацию 
                о предстоящих (краткосрочных и долгосрочных) разработках BTCA. 
                </p>
                <div className="button-content">
                    <Button className="Registration__getting-button4">
                    <img
                    // src={}
                    alt="error"
                    />
                      Просмотреть карту развития
                      </Button>
                  </div>
              </Col>

            </Row>
          </Flex>


          <Flex className="frame-img">
            <img src={Frame} alt="error" />
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

export default Documents