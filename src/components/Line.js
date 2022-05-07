import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import {auth, db} from "../firebase";
import SendMessage from './SendMessage';


//Lineの形を表してる
function Line() {
  //入力したメッセージの情報
  const[mesagges,setMesagges] = useState([]);

  //firebaseから持ってきた「messagess」の情報を集める。
  useEffect(() => {
   db.collection("messages")
   .orderBy("createdAt")
   .limit(50)
   .onSnapshot((snapshot) => {
     setMesagges(snapshot.docs.map((doc) => doc.data()));
   });
  },[]);

  return (
    //SignOutはサインアウトするためのコンポーネント
    //SendMessageはメッセージを入力をするところのコンポーネント
    <div>

      <SignOut />
      <div className = "msgs">
        {mesagges.map(({id, text,photoURL,uid}) => (
          <div>
            <div key = {id}
                 className = {`msg ${
                 uid === auth.currentUser.uid ? "sent" : "received"}`}
            >
              <img src = {photoURL} alt = ""/>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Line;
