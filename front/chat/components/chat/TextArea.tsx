"use client";
import { Box, Button, TextField } from "@mui/material";
import Input from "@mui/material/Input";
import React, { useState, useEffect} from "react";
import instance from "../customAxios";
import axios from 'axios';
export const TextArea: React.FC = () => {
  const [text, setText] = useState("");
  const [receivedMessage, setReceivedMessage] = useState(""); // 追加


  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
  };

  const handleSend = async() => {
    const headers = {
      'Access-Token': localStorage.getItem('access-token'),
      'Client': localStorage.getItem('client'),
      'Uid': localStorage.getItem('uid'),
    };
    const data = {
      message: text,
      user_id: localStorage.getItem('userId')
    }
    await axios.post('http://localhost:3001/auth/api/messages', data, {headers:headers})
      .then(response => {
        console.log(response);
      })
  };

  //Enterで送信、shift + Enterで改行
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === "Enter" && !event.shiftKey){
      event.preventDefault();
      handleSend();
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMessage = localStorage.getItem('message');
      if (savedMessage) {
        setText(savedMessage);
      }
    }
  }, []);

  // (async () => {
  //   const headers = {
  //     'access-token': localStorage.getItem('access-token'),
  //     'client': localStorage.getItem('client'),
  //     'uid': localStorage.getItem('uid')
  //   };
  //   await axios.get('http://localhost:3001/api/messages', {headers:headers}).then(data => {
  //     console.log(data)
  //   })
  // })();
  
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end", 
        height: "95vh", 
        bgcolor: "background.paper",
        borderRadius: 1,
        width: "100%",
    }}
  >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bgcolor: "background.paper",
          borderRadius: 1,
          width: "100%",
        }}
      >
        <TextField
          id="outlined-basic"
          label="メッセージを入力してください．"
          variant="outlined"
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyPress}
          size='small'
          multiline
          rows={3}
          sx = {{flexGrow:1, marginRight:0.5}}
        />
        <Button color="primary" variant="outlined" onClick={handleSend}>
          送信
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          bgcolor: "background.paper",
          borderRadius: 1,
          width: "100%",
          marginTop: 2,
        }}
      >
        <p>受信したメッセージ: {receivedMessage}</p>
      </Box>
    </Box>
  );
};
