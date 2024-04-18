import axios from 'axios';
import { SignUpFormData } from "../components/form/SignUpForm"

export const userDataCreate = async(data: SignUpFormData) => {
  const url = "http://localhost:3001/api/messages"
  await axios.post(url, data)
  .then(data => {
    console.log(data)

    // 取得したresponseより、アクセストークンなどを変数に代入
    const accessToken = data.headers['access-token'];
    const client = data.headers['client'];
    const uid = data.headers['uid'];

    // 認証情報をlocalStorageに保存する
    localStorage.setItem('access-token', accessToken);
    localStorage.setItem('client', client);
    localStorage.setItem('uid', uid);

  }).catch(error => {
    console.log(error);
  });
};