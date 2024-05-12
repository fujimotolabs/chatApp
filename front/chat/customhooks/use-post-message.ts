import axios from 'axios';

export const usePostMessage = async (userId : string, message : string) => {
    
    const url = 'http://localhost:3001/api/messages';

    await axios.post(url, {useId: userId, message: message});


};

usePostMessage("c86c6631-239a-4879-85b5-e155c1ff8d09","test")

