import { Button, Col, Flex, Input } from "antd";
import Title from "antd/es/skeleton/Title";
import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Subscribe = () => {

  const [userEmail, setUserEmail] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/email")
      .then((res) => {

        setData(res.data)
      }).catch((err) => {
        alert(err)
      })
  }, [])

  console.log(data);


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
            {data?.map((email) => {
              return(
                <div>
                  <Input className="Block-area-2-input"
                  
              type="Email"
              placeholder={"Ваш e-mail"}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            >{email?.taste}</Input>
            <div className="">
              <Button
              key={email.id}
              id={email.id}
              email={email.email}
                className="Block-area-2-button"
                onClick={addSubscribe}
              >
                <Link to="/questions">Подписаться</Link>
              </Button>
            </div>
                </div>
              )
            })}
          </Flex>
        </Col>
      </Flex>) : (
        <div></div>
      )}
    </Fragment>
  )
}

export default Subscribe