"use client";
import { Box, Button, TextField } from "@mui/material";
import Input from "@mui/material/Input";
import React, { useState, useEffect} from "react";

export const TextArea: React.FC = () => {
  const [text, setText] = useState("");
  const [receivedMessage, setReceivedMessage] = useState(""); // 追加


  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
  };

  const handleSend = () => {
    console.log(`message: ${text}`);
    if (typeof window !== 'undefined') {
      localStorage.setItem('message', text);
    }
    setReceivedMessage(text); 
    setText('');
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
