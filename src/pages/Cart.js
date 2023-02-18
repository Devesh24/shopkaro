import styled from "styled-components"
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";

const Container = styled.div ``

const Wrapper = styled.div `
    padding: 20px;
`

const Title = styled.h1 `
    font-weight: 300;
    text-align: center;
`

const Top = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({padding: "20px 10px"})}
`
const TopButton = styled.button `
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div `
    ${mobile({display: "none"})}
`
const TopText = styled.span `
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div `
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const Info = styled.div `
    flex: 3;
`

const Product = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
    ${mobile({flexDirection: "column"})}
`    
const ProductDetail = styled.div `
    flex: 2;
    display: flex;
`
const Image = styled.img `
    width: 300px;
    ${mobile({width: "220px"})}
`
const Details = styled.div `
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span `
    margin-bottom: 5px;
`
const ProductID = styled.span `
    margin-bottom: 5px;
`
const ProductColor = styled.div `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-bottom: 5px;
`
const ProductSize = styled.span ``

const PriceDetail = styled.div `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const AmountContainer = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({marginBottom: "10px"})}
`
const Amount = styled.div `
    font-size: 24px;
    margin: 5px 10px;
`
const ProductPrice = styled.div `
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr `
    background-color: #eee;
    border: none;
    height: 1px;
`


const Summary = styled.div `
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    ${mobile({marginTop: "10px"})}
`
const SummaryTitle = styled.h1 `
    font-weight: 200;
    text-align: center;
`
const SummaryItem = styled.div `
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.div ``
const SummaryItemPrice = styled.div ``

const Button = styled.div `
    width: 95%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    text-align: center;
`


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="/assets/jessieShoe.png" />
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                <ProductID><b>ID:</b> 78896980</ProductID>
                                <ProductColor color="black" />
                                <ProductSize><b>Size:</b> 37.5 </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer>
                                <RemoveIcon />
                                <Amount>2</Amount>
                                <AddIcon />
                            </AmountContainer>
                            <ProductPrice>Rs 500</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="/assets/tshirt.png" />
                            <Details>
                                <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                <ProductID><b>ID:</b> 827985790</ProductID>
                                <ProductColor color="yellow" />
                                <ProductSize><b>Size:</b> 35 </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer>
                                <RemoveIcon />
                                <Amount>2</Amount>
                                <AddIcon />
                            </AmountContainer>
                            <ProductPrice>Rs 1000</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal:</SummaryItemText>
                        <SummaryItemPrice>Rs 1500</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping:</SummaryItemText>
                        <SummaryItemPrice>Rs 100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount:</SummaryItemText>
                        <SummaryItemPrice>Rs -100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total:</SummaryItemText>
                        <SummaryItemPrice>Rs 1500</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart