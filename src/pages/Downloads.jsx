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
            <Row className="Steps__Registration4">
              <Col className="Registration__getting5">
                <div className="Registration__getting-img3">
                  <img
                    src={window}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title2">
                  STABLE RELEASE
                </h1>
                <div className="list-content">
                  <p className="list-content-text">64bit:</p>
                  <Link className="list-content-link" to={"https://learn.microsoft.com/ru-ru/windows/win32/msi/windows-installer-on-64-bit-operating-systems"}>Installer</Link>
                  <Link className="list-content-link" to={"https://www.7-zip.org/download.html"}>ZIP</Link>
                </div>
                <p className="Registration__getting-1-text3">
                  Поддерживаемые версии Windows - 7 и выше.
                </p>


              </Col>
              <Col className="Registration__getting5">
                <div className="Registration__getting-img4">
                  <img
                    src={linux}
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
                        <p className="list-title">arm</p>
                      </li>
                      <li className="list-content">
                        <p className="list-content-text">32bit:</p>
                        <Link className="list-content-link" to={"https://archlinux.org/?ref=itsfoss.com"}>Tarball</Link>
                      </li>
                      <li className="list-content">
                        <p className="list-content-text">64bit:</p>
                        <Link className="list-content-link" to={"https://developer.arm.com/downloads/-/gnu-rm"}>Tarball</Link>
                      </li>
                    </ul>
                    <ul className="ul-list">
                      <li className="list-title">
                        <p>x86</p>
                      </li>
                      <li className="list-content">
                        <p className="list-content-text">32bit:</p>
                        <Link className="list-content-link" to={"https://www.nvidia.com/Download/driverResults.aspx/196251/ru/"}>Tarball</Link>
                      </li>
                      <li className="list-content">
                        <p className="list-content-text">64bit:</p>
                        <Link className="list-content-link" to={"https://docs.platformio.org/en/latest/platforms/linux_x86_64.html"}>Tarball</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="Registration__getting5">
                <div className="Registration__getting-img3">
                  <img
                    src={mac}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title2">
                  STABLE RELEASE
                </h1>
                <div className="list-content">
                  <p className="list-content-text">64bit:</p>
                  <Link className="list-content-link" to={"https://support.apple.com/ru-ru/102662"}>Installer</Link>
                  <Link className="list-content-link" to={"https://support.apple.com/ru-ru/109033"}>Tarball</Link>
                </div>
                <p className="Registration__getting-1-text3">
                  Поддерживаемые версии macOS - 10.10 и выше.
                </p>

              </Col>
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