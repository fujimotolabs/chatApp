import axios from 'axios';

export const usePostMessage = async (userId : string, message : string) => {
    
    const url = 'http://localhost:3001/api/messages';

    (await axios.post(url, {userId: userId, message: message})
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    }
    ));


};





