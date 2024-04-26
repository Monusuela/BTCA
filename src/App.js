import { Fragment } from "react"
import "./App.css"
import Container from "./components/container";
import { Route, Router, Link } from "react-router-dom";
import { Flex, Button } from "antd";
import { TfiWorld} from "react-icons/tfi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbCoinBitcoin } from "react-icons/tb";
// import { BsCurrencyBitcoin } from "react-icons/bs";




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
                  <TbCoinBitcoin/>
                  <Link to={"/"} className="">Функции</Link>
                  <Link to={"/"} className="">Кошельки</Link>
                  <Link to={"/"} className="">Участие</Link>
                  <Link to={"/"} className="">Ресурсы</Link>
                  <Link to={"/"} className="">Новости</Link>
                  <Link to={"/"} className="">О BTCA</Link>
                </nav>

                <Flex>
                  {/* Заменить images */}
                  <Button className=""  icon={<TfiWorld style={{color: "red"}}/> }>Rus</Button>
                  <Button className="" icon={<RiMoneyDollarCircleLine style={{color: "white", backgroundColor: "orange"}}/>}>10.834</Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </header>
    </Fragment>
  )
}

export default App