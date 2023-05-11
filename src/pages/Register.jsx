import styled from "styled-components";
import { mobile } from "../responsive";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string().required("email is required").email("email not valid"),
    userName: Yup.string()
      .required("username is required")
      .min(4, "username must be atleast 4 character"),
    password: Yup.string()
      .required("Password is mendatory")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <Input placeholder="email" {...register("email")} />
          {errors.email && <p style={{color:"red", margin:"0px", fontSize:"0.7rem", textAlign:"end"}}>{errors.email.message}</p>}

          <label>Username</label>
          <Input
            placeholder="userName"
            {...register("userName", {
              required: true,
              minLength: 4,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.userName && <p style={{color:"red", margin:"0px", fontSize:"0.7rem", textAlign:"end"}}>{errors.userName.message}</p>}

          <label>Password</label>
          <Input
            placeholder="password"
            type="password"
            {...register("password", {
              required: "password is required",
              minLength: { value: 8, message: "password must be 8 characters" },
            })}
          />
          {errors.password && <p style={{color:"red", margin:"0px", fontSize:"0.7rem", textAlign:"end"}}>{errors.password.message}</p>}
          <label>Confirm Password</label>
          <Input
            placeholder="confirm password"
            type="password"
            {...register("confirmPwd")}
          />
          {errors.confirmPwd && <p style={{color:"red", margin:"0px", fontSize:"0.7rem", textAlign:"end"}}>{errors.confirmPwd.message}</p>}

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit(onSubmit)}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
