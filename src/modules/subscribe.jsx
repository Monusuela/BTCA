import { Button, Col, Flex, Input } from "antd";
import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Subscribe = () => {

  const [userEmail, setUserEmail] = useState("")
  const [data, setData] = useState([])

  const onSubmit = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:9000/email", {
      email: userEmail
    }).then(() =>{
      alert("ok")
    }).catch(error =>{
      alert(error?.message)
    })
      
  }

  useEffect(() => {
    axios.get("http://localhost:9000/email")
      .then((res) => {

        setData(res.data)
      }).catch((err) => {
        alert(err)
      })
  }, [])

  // console.log(data);


  const addSubscribe = () => {
    localStorage.setItem("userEmail", userEmail);
    window.location.reload()
  }



  return (
    <Fragment>
      {!localStorage.getItem("userEmail") ? (<Flex className="Block-area">
        <Col className="Block-main">
          <h1 className="Block-area-title">
            Никогда не пропускайте обновления
          </h1>
          <p className="Block-area-text">
            Подпишитесь на информационный бюллетень и будьте первым, кто
            получит новейшие оповещения, объявления и обновления о
            разработках BTCA.
          </p>
          <Flex className="Block-area-2" >
            <form onSubmit={onSubmit}>
              <Input className="Block-area-2-input"

                type="email"
                placeholder={"Ваш e-mail"}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <div className="">
                <button type="submit" className="Block-area-2-button">Подписаться</button>
              </div>
            </form>
          </Flex>
        </Col>
      </Flex>) : (
        <div></div>
      )}
    </Fragment>
  )
}

export default Subscribe