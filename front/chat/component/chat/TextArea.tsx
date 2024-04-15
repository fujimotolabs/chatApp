"use client";
import { Box, Button, TextField } from "@mui/material";
import Input from "@mui/material/Input";
import React, { useState } from "react";

export const TextArea: React.FC = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
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
        label="メッセージを入力してください"
        variant="outlined"
        value={text}
        onChange={handleTextChange}
        size="small"
        multiline
        rows={3}
      />
      <Button color="primary" variant="outlined">
        送信
      </Button>
    </Box>
  );
};
