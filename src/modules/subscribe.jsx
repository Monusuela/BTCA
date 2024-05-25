import { Button, Col, Flex, Input } from "antd";
import Title from "antd/es/skeleton/Title";
import { Fragment } from "react"
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <Fragment>
      <Flex className="Block-area">
        <Col className="Block-main">
          <Title className="Block-area-title">
            Никогда не пропускайте обновления
          </Title>
          <p className="Block-area-text">
            Подпишитесь на информационный бюллетень и будьте первым, кто
            получит новейшие оповещения, объявления и обновления о
            разработках BTCA.
          </p>
          <Flex className="Block-area-2">
            <Input className="Block-area-2-input"
              placeholder={"Ваш e-mail"}
            ></Input>
            <div className="">
              <Button
                className="Block-area-2-button"
              >
                <Link to="/questions">Подписаться</Link>
              </Button>
            </div>
          </Flex>
        </Col>
      </Flex>
    </Fragment>
  )
}

export default Subscribe