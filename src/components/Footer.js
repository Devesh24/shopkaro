import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { mobile } from "../responsive";

const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
`

const Left = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1 ``
const Desc = styled.p `
    margin: 20px 0px;
`
const SocialContainer = styled.div `
    display: flex;
`
const SocialIcon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center ;
    background-color: #${props => props.color};
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div `
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title = styled.h3 `
    margin-bottom: 30px;
`
const List = styled.ul `
    //li has its own margin and padding
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li `
    width: 50%;
    margin-bottom: 20px;
`

const Right = styled.div `
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`
const ContactItem = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Payment = styled.img `
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shopify</Logo>
            <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptate incidunt harum soluta quas enim reprehenderit ex qui quo vitae culpa possimus, debitis esse expedita nesciunt dicta dignissimos iste maxime est illo ut architecto. Incidunt ipsam dignissimos harum mollitia, velit necessitatibus commodi aliquid nulla error. Dolorum minus illo nostrum amet.</Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="55acee">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="e60023">
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><RoomIcon style={{marginRight: "10px"}} /> Mumbai, India</ContactItem>
            <ContactItem><PhoneIcon style={{marginRight: "10px"}} /> +91 9987654321</ContactItem>
            <ContactItem><MailIcon style={{marginRight: "10px"}} /> contact@ecommerce.com</ContactItem>
            <Payment src="/assets/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer