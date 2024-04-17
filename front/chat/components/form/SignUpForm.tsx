import { useForm } from 'react-hook-form';
import { userDataCreate } from "../../apis/signUp"

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger
  } = useForm<SignUpFormData>({
    mode: "onBlur",
    criteriaMode: "all"
  });

  const onSubmit = async(data: SignUpFormData) => {
    console.log(data);
    await userDataCreate(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">名前</label>
      <input
        id="name"
        {...register("name", {
          required: '名前を入力してください'
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}

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
          onBlur: () => {
            if (getValues("password_confirmation")) {
              trigger("password_confirmation");
            }
          },
          minLength: 6
          })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label htmlFor="password_confirmation">パスワード再入力</label>
      <input
        id="password_confirmation"
        type="password"
        {...register("password_confirmation", {
          required: "パスワードを入力してください", 
          minLength: 6 , 
          validate: (value) => {
            return (
              value === getValues("password") || "パスワードが一致しません"
            );
          }})}
      />
      {errors.password_confirmation && <p>{errors.password_confirmation.message}</p>}

      <input type="submit" />
    </form>
  );
};

export default SignUpForm;