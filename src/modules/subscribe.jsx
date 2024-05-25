import { Button, Col, Flex, Input } from "antd";
import Title from "antd/es/skeleton/Title";
import { Fragment, useState } from "react"
import { Link } from "react-router-dom";


//  import React, { useEffect, Fragment, useState } from "react";
// import { useMutation, useSubscription, gql } from "@apollo/client";

// import OnlineUser from "./OnlineUser";

const Subscribe = () => {

const [userEmail, setUserEmail] = useState("")

const addSubscribe = () => {
  localStorage.setItem("userEmail", userEmail);
  window.location.reload()
}


  return (
    <Fragment>
      {!localStorage.getItem("userEmail") ? (<Flex className="Block-area">
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
            id="userEmail"
            type="Email"
              placeholder={"Ваш e-mail"}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            ></Input>
            <div className="">
              <Button
                className="Block-area-2-button"
                onClick={addSubscribe}
              >
                <Link to="/questions">Подписаться</Link>
              </Button>
            </div>
          </Flex>
        </Col>
      </Flex> ) : (
        <div></div>
      )}
    </Fragment>
  )
}

export default Subscribe