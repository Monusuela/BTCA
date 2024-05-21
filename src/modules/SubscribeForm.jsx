import { Button, Input } from "antd";
import axios from "axios";
import { Fragment, useState } from "react";
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
                <p className="formm-text">Ваша почта</p>
                <Input placeholder={"Начните ввод..."}
                    type="email"

                    onChange={handleEmailChange}
                    value={email}
                    className="formm-input2"
                    />
                <p className="formm-text2">Ваш вопрос</p>
                <Input placeholder={"Начните ввод..."}

                    type="text"
                    onChange={handleQuestionsChange}
                    value={questions}
                    className="formm-input"
                    />
                <div>
                    <Button  className="formm-button"
                        onClick={postTest}
                        >Отправить</Button>
                    {/* {done && "Thank you ..."} */}
                    {/* {statusMessage} */}
                </div>
            </form>
        </Fragment>
    )
}

export default SubscribeForm