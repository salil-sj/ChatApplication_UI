import React, { useEffect, useState } from "react";
import ChatBoxHeader from "./ChatBoxHeader";

import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";
import SendComponent from "./SendComponent";

import { useDispatch, useSelector } from "react-redux";
import { updateReadFlag } from "../store/userSlice";

const Chatbox = () => {
  // const [messages, setMessages] = useState(new Map());

  const dispatch = useDispatch();
  const loggedUser = useSelector((store) => store.userData.userName);
  const currrentRecipient = useSelector(
    (store) => store.userData.currrentRecipient.userName
  );

  const messageData = useSelector(
    (store) => store.messageData.message[currrentRecipient]
  );

  const handleReadFlag = () => {
    /*
    If current receint ie....tab of the particular username opened is same as the msg recieved, so readFlag ---> true 
    as window is already opened
  */
    console.log("current RECIPIENT.................");
    console.log(currrentRecipient);
    if (currrentRecipient != undefined) {
      console.log("DISPATCHING AN ACTION.................");
      dispatch(updateReadFlag(currrentRecipient));
    }
  };

  useEffect(() => {
    handleReadFlag();
  }, [messageData]);

  return (
    <div
      className=" max-h-screen bg-gray-200"
      style={{
        scrollbarWidth: "thin",
      }}
    >
      <div className="max-h-[440px]  overflow-y-auto flex flex-col-reverse">
        {messageData?.map((data) => {
          if (data.senderUserName === loggedUser) {
            return <SentMessage content={data.content} />;
          } else {
            return (
              <RecievedMessage
                userName={data.senderUserName}
                content={data.content}
                time={data.timeStamp}
              />
            );
          }
        })}
      </div>
      <SendComponent />
    </div>
  );
};

export default Chatbox;
