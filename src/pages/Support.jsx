// import { Fragment, useState, useRef, useEffect } from "react"
// import Container from "../components/container"
// import { Flex, Input } from "antd"
// import { shallowEqual, useSelector } from "react-redux"

// const comments = {
//     id: 1,
//     Items: [
//         {
//             id: 1,
//             name: "Hello. I have a very old wallet version (PIVX Core version v3.1.0.2 (64-bit)). Wondering if you can guide me on the best way to update my wallet and get up-to-date on the blockchain? Many thanks. Robin",
//             Items: [
//                 {
//                     id: 1,
//                     name: "Robin, the best thing to do would be to do the following: 1.Shutdown old wallet 2.upgrade wallet version 3.start new wallet and follow this guide:",
//                     Items: [
//                         {
//                             id: 1,
//                             name: "hello world 123",
//                             Items: []
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }

// const Comment = () => {

//     const [commentsData,setCommentsData] = useState(comments);

//     const[input, setInput] = useState("");

//     const onAddComment = () => {

//     }


//     // const [addSubscribe] = useSelector(
//     //     (state) => ({
//     //         addSubscribe: state.auth.addSubscribe,
//     //         // user: state.auth.user,
//     //     }),
//     //     shallowEqual
//     // );

//     return (
//         <Fragment>
//             <Container>
//                 <Flex>
//                     <div>
//                         <h1>
//                             BTCA Support
//                         </h1>
//                         <p>Forum / General Support and Questions / Old wallet - needs an update</p>
//                     </div>
//                 </Flex>

//                 <Flex>
//                     <div>

//                         <div className={`comments.id === 1 ("inputContainer") ? ("commentContainer")`}>
//                             {comments.id === 1 ? (
//                                 <>
//                                 <Input
//                             type="text"
//                             className="inputContainer__input first_input"
//                             autoFocus
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             placeholder="Начните ввод..."
//                             />
//                             <div className="reply comment" onClick={onAddComment}>
//                             Отправить
//                             </div>
//                                 </>
//                             ) : (
//                                 <span>{comments.name}</span>
//                             )}
                            
//                         </div>
//                         <div>
//                         {comments?.Items?.map((cmnt) => {
//                             return <Comment key={cmnt.id} comment={cmnt} />
//                         })}
//                         </div>
//                         {/* <form className="w-100"> */}
//                             {/* { */}
//                                 {/* // addSubscribe ? */}
//                                  {/* ( */}
//                                 {/* <div className="form-group">
//                                     <textarea 
//                                     className="form-control" 
//                                     placeholder="Comment..."
//                                     ></textarea>
//                                 </div> */}
//                                 {/* // ) : ( */}
//                                 <>
//                                 {/* <div>
//                                     <input type="email" className="form-control" placeholder="Email"/>
//                                 </div>
//                                 <div className="form-group">
//                                     <textarea 
//                                     className="form-control" 
//                                     placeholder="Comment..."
//                                     ></textarea>
//                                 </div> */}
                                
//                                 </>
//                             {/* //     ) */}
//                              {/* } */}
//                             {/* <div>
//                                 <Input type="submit" className="form-control" value={"Add Comment"} />
//                             </div> */}
//                         {/* </form> */}
//                     </div>
//                 </Flex>
//             </Container>
//         </Fragment>
//     )
// }

// export default Comment