import { Button, Input } from "antd";
import axios from "axios";
// const tokent = `6827835435:AAHiMd_yE8RNaLr5U6jA07f-FCptgOsAg1w`;
// const API = `https://api.teledram.org/bot${tokent}`;

import { Fragment, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "antd/es/form/Form";

// export const TelegramGetChatId = async () => {
//   const response = await axios.get(API +"/getUpdates");

//   return response.data.result[0].message.chat.id;
// };

// export const TelegramPostChat = async (data = "empty") => {
//   await axios.post(API + "/sendmessage", {
//     chat_id: TelegramGetChatId(),
//     text: data,
//   });
// };

const SubscribeForm = () => {
    const [email, setEmail] = useState("")
    const [questions, setQuestions] = useState("")


    const postTest = (e) => {
        e.preventDefault()
        axios.post(
            `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
                `test
        <b>Email: ${email}</b>
        <b>Question: ${questions}</b>
   `
            )}&parse_mode=html`
        )
            .then(() => {
                window.location.reload()
            })
    };



    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        // const { value } = event.target
        // setEmail(value)
    }

    const handleQuestionsChange = (event) => {
        setQuestions(event.target.value);
        // const { value } = event.target
        // setQuestions(value)
    }


    return (
        <Fragment>
            <form className="formm" >
                <p style={{ color: "white", fontSize: "18px", paddingTop: "40px" }}>Ваша почта</p>
                <Input placeholder={"Начните ввод..."}
                    type="email"

                    onChange={handleEmailChange}
                    value={email}
                    className="Footer__widgets-input"
                    style={{ width: "600px", height: "65px", background: "#ffffff21", marginTop: "10px", color: "white" }}
                />
                <p style={{ color: "white", fontSize: "18px" }}>Ваш вопрос</p>
                <Input placeholder={"Начните ввод..."}

                    type="text"
                    onChange={handleQuestionsChange}
                    value={questions}
                    className="Footer__widgets-input"
                    style={{ width: "600px", height: "179px", background: "#ffffff21", marginTop: "10px", color: "white" }}
                />
                <div>
                    <Button
                        onClick={postTest}
                        style={{
                            background: "#1D9A6D",
                            borderRadius: "12px",
                            padding: "10px 24px",
                            width: "134px",
                            height: "50px",
                            fontSize: "16px",
                            border: "1px solid #1D9A6D",
                            color: "white",
                            marginTop: "20px"
                        }}>Отправить</Button>
                    {/* {done && "Thank you ..."} */}
                    {/* {statusMessage} */}
                </div>
            </form>
        </Fragment>
    )
}

export default SubscribeForm