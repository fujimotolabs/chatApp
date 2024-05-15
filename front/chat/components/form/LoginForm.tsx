"use client"

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from "next/navigation"

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger
  } = useForm<LoginFormData>({
    mode: "onBlur",
    criteriaMode: "all"
  });
  const router = useRouter();

  const onSubmit = async(data: LoginFormData) => {
    console.log(data);
    const url = "http://localhost:3001/auth/sign_in"

    await axios.post(url, data)
    .then(response => {
      // 取得したresponseより、アクセストークンなどを変数に代入
      const accessToken = response.headers['access-token'];
      const client = response.headers['client'];
      const uid = response.headers['uid'];
      const userId = response.headers['user_id'];
      // 認証情報をlocalStorageに保存する
      localStorage.setItem('access-token', accessToken);
      localStorage.setItem('client', client);
      localStorage.setItem('uid', uid);
      localStorage.setItem('userId', userId);
      console.log(localStorage);
      router.push("/chatSpace");
  
    }).catch(error => {
      console.log(error);
    });
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">メールアドレス</label>
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "メールアドレスを入力してください",
          pattern: {
            value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
            message: "入力形式がメールアドレスではありません。"
          }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="password">パスワード</label>
      <input
        id="password"
        type="password"
        {...register("password", {
          required: "パスワードを入力してください",
          minLength: 6
          })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  );
};

export default LoginForm;