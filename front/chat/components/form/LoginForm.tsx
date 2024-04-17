import { useForm } from 'react-hook-form';

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

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
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