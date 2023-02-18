import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("/assets/loginbg1.jpg") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div `
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width: "75%"})}
`

const Title = styled.h1 `
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form `
    display: flex;
    flex-direction: column;
`

const Input = styled.input `
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button `
    width: 40%;
    border: none;
    padding: 15px 20px; 
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 10px 0px;
    transition: all 0.5s ease-in-out;

    &:hover{
        background-color: #62B6B7;
        color: black;
    }
`

const Links = styled.div `
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

    &:hover{
        color: blue;
    }
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="UserName" required />
                <Input placeholder="Password" required />
                <Button>LOG IN</Button>
                <Links>Forgot Password?</Links>
                <Link to="/register" style={{color: "inherit"}}>
                    <Links>Create a new Account.</Links>
                </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login