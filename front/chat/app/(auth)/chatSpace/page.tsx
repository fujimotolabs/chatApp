import { TextArea } from "@/component/chat/TextArea";
import { Box } from "@mui/material";

export default function Home() {
  const cable = ActionCable.createConsumer("ws://localhost:3001/cable");
  const chatChannel = cable.subscriptions.create("ChatChannel", {
    connected: () => {
      console.log("connected");
    },
    disconnected: () => {
      console.log("disconnected");
    },
    received: (data) => {
      console.log(data);
    },
  });
  return (
    <div className="relative w-full h-full">
      <Box className="w-full h-ful text-white"></Box>
      <TextArea />
    </div>
  );
}
