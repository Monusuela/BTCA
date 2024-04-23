import { Fragment } from "react"
import "./App.css"
import Container from "./components/container";
import { Route, Router, Link } from "react-router-dom";
import { Flex } from "antd";
// import header from "./layout/header"



const App = () => {
  return (
    <Fragment>
      <header className="header">
        <Container>
          <Flex>

            <Flex >
              <Flex>
                {/* <Logo /> */}
                <nav>
                  <Link to={"/"} className="">Функции</Link>
                  <Link to={"/"} className="">Кошельки</Link>
                  <Link to={"/"} className="">Участие</Link>
                  <Link to={"/"} className="">Ресурсы</Link>
                  <Link to={"/"} className="">Новости</Link>
                  <Link to={"/"} className="">О BTCA</Link>
                </nav>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </header>
    </Fragment>
  )
}

export default App