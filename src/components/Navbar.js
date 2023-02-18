import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

// npm install styled-components
const Container = styled.div `
    height: 60px;

    //to use media queries which are stored in an another file
    ${mobile({height: "60px"})}
`

const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
`

const Left = styled.div `
    /* width: 33.3%; */
    flex: 1; //same as above property
    display: flex;
    align-items: center;
`
const SearchContainer = styled.div `
    border: 0.5px solid teal;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 5px;
    ${mobile({marginLeft: "10px"})}
`
const Input = styled.input `
    border: none;
    ${mobile({width: "50px"})}

    &:focus{
        outline: none;
    }
`

const Center = styled.div `
    flex: 1;
    text-align: center;
`
const Logo = styled.h1 `
    /* text-align: center; */
    font-weight: bold;
    text-decoration: underline;
    text-decoration-style: dashed;
    ${mobile({fontSize: "24px", marginLeft: "10px"})}
`

const Right = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center"})}
`
const MenuItem = styled.div `
    font-size: 14px;
    margin-left: 25px;
    padding: 8px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    ${mobile({fontSize: "12px", marginLeft: "5px"})}

    background-color: ${props => props.btn === "secondary" && "teal"};
    color: ${props => props.btn === "secondary" && "white"};
    border: ${props => props.btn === "primary" && "0.5px solid teal"};

    &:hover{
        background-color: ${props => props.btn === "secondary" && "#62B6B7"};
        background-color: ${props => props.btn === "primary" && "#F5F5F5"};
    }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <Search style={{color:"gray", fontSize:16}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>SHOPIFY</Logo>
            </Center>
            <Right>
                <Link to="/register" style={{color: "inherit", textDecoration: "none"}} >
                    <MenuItem btn="primary" >Register</MenuItem>
                </Link>
                <Link to="/login" style={{color: "inherit", textDecoration: "none"}} >
                    <MenuItem btn="secondary" >Sign In</MenuItem>
                </Link>
                <Link to="/cart" style={{color: "inherit", textDecoration: "none"}} >
                    <MenuItem btn="primary">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar