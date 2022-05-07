import React, { useState } from 'react';
import {db,auth} from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
  //入力されたメッセージ
  const [message,setMessage] = useState("");

  function sendMessage(e){
    //リロードしても内容がなくならないようにする
    e.preventDefault();

    //現在ログイン中ユーザーの「ユーザーID」とGoogleのプロフィール写真
    const{uid,photoURL} = auth.currentUser;

    //firebaseの”message”に入力したメッセージを追加する作業
    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      //エンターを押した時刻
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //入力した後に中身を空にするため
    setMessage("");
  }


  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder='メッセージを入力してください'
            type = "text"
            onChange={(e) => setMessage(e.target.value)}
            value = {message}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }}/>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
