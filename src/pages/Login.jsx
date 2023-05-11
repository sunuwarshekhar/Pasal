import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();
  const { isFetchig, error } = useSelector((state) => state.user);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let formToWorkOn = document.getElementById("currentData");
    const data = new FormData(formToWorkOn);

    let formData = {
      username: data.get("username"),
      password: data.get("password"),
    };

    let validation = Validate(formData);

    if (Object.keys(validation).length === 0) {
      login(dispatch, { username, password });
    } else {
      setErrors(validation);
    }
  };
  const Validate = (formData) => {
    const validationError = {};
    if (!formData.username) {
      validationError.username = "username is required";
    }

    if (!formData.password) {
      validationError.password = "password is reqired";
    } else if (formData.password.length < 6) {
      validationError.password = "password cannot be less than 6 characters";
    }
    return validationError;
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form id="currentData" onSubmit={handleSubmit}>
          <Input
            placeholder="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <p
              style={{
                color: "red",
                margin: "0px",
                fontSize: "0.5rem",
                textAlign: "end",
              }}
            >
              {errors.username}
            </p>
          )}
          <Input
            placeholder="password"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errors.password && (
            <p
              style={{
                color: "red",
                margin: "0px",
                fontSize: "0.5rem",
                textAlign: "end",
              }}
            >
              {errors.password}
            </p>
          )}
          <Button onClick={handleSubmit} disabled={isFetchig}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
