import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Button, Col, Flex, Row } from "antd"
import Frame from "../images/Frame.png"
import dowload from "../images/dowload.png"
import abstract from "../images/3Dabstract.png"
import { Link } from "react-router-dom"
import window from "../images/windows.png"
import linux from "../images/Linux.png"
import mac from "../images/mac.png"
import android from "../images/android.png"
import appStore from "../images/app-store.png"
import googlePlay from "../images/google-play.png"
import qr from "../images/QR.png"

const Downloads = () => {
  return (
    <Fragment>
      <section className="section__main-1">
        <Container className={"container__left"}>
          <Flex className="banner" style={{ color: "#fff" }}>
            <Col span={11} className="banner">
              <h1 className="banner-title">
                Загрузки
              </h1>
              <p className="banner-text">
                Последний официальный релиз v5.3.0 опубликован 21 день назад.
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

          <Flex className="Regiration3">
            <Row className="Steps__Registration2">
              <Col className="Registration__getting3">
                <div className="Registration__getting-img">
                  <img
                    src={window}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title2">
                  STABLE RELEASE
                </h1>
                <div>
                  <p>64bit:</p>
                  <Link>Installer</Link>
                  <Link>ZIP</Link>
                </div>
                <p className="Registration__getting-1-text3">
                  Поддерживаемые версии Windows - 7 и выше.
                </p>


              </Col>
              <Col className="Registration__getting3">
                <div className="Registration__getting-img">
                  <img
                    src={linux}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title2">
                  STABLE RELEASE
                </h1>
                <div>
                  <div>
                    <ul>
                      <li>arm</li>
                      <li>
                        <p>32bit:</p>
                        <Link>Tarball</Link>
                      </li>
                      <li>
                        <p>64bit:</p>
                        <Link>Tarball</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>x86</li>
                      <li>
                        <p>32bit:</p>
                        <Link>Tarball</Link>
                      </li>
                      <li>
                        <p>64bit:</p>
                        <Link>Tarball</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="Registration__getting3">
                <div className="Registration__getting-img">
                  <img
                    src={mac}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title2">
                  STABLE RELEASE
                </h1>
                <div>
                  <p>64bit:</p>
                  <Link>Installer</Link>
                  <Link>Tarball</Link>
                </div>
                <p className="Registration__getting-1-text3">
                  Поддерживаемые версии macOS - 10.10 и выше.
                </p>

              </Col>
              <Col className="Registration__getting3">
                <div className="Registration__getting-img">
                  <img
                    src={android}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title2">
                  STABLE RELEASE
                </h1>
                <div>
                  <div>
                    <ul>
                      <li>
                        <img
                          src={appStore}
                          alt="error"
                        />
                      </li>
                      <li>
                        <img
                          src={qr}
                          alt="error"
                        />
                      </li>
                      <li>
                        <p>Для iOS и Android</p>

                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src={googlePlay}
                          alt="error"
                        />
                      </li>
                      <li>
                        <Button className="Registration__getting-button3">
                          APK
                        </Button>
                      </li>
                      <li>
                        <p>Скачать APK (только для  Android)</p>
                      </li>
                    </ul>
                  </div>
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

export default Downloads