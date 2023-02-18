import styled from "styled-components"
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive"
import {useState} from 'react'

const Container = styled.div ``

const Wrapper = styled.div `
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`

const ImgContainer = styled.div `
    flex: 1;
`

const Image = styled.img `
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "50vh"})}
`

const InfoContainer = styled.div `
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`

const Title = styled.h1 `
    font-weight: 200;
    text-decoration: underline;
`

const Desc = styled.p `
    margin: 20px 0px;
`

const Price = styled.span `
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({width: "100%"})}
`
const Filter = styled.div `
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span `
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div `
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select `
    margin-left: 10px;
    padding: 10px; 
`
const FilterOption = styled.option ``

const AddContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({width: "100%"})}
`

const AmountContainer = styled.div `
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span `
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`

const Button = styled.button `
    padding: 15px;
    border: 2px solid teal;
    font-weight: 500;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4; 
    }
`


const IndProduct = () => {

    const [quan, setQuan] = useState(1)

    const handleQuan = (func) => {
        if(func === "dec")
        {
            setQuan(prev => prev>1 ? prev-1 : prev)
        }
        else
        {
            setQuan(prev => prev+1)
        }
    }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="/assets/jumpsuit.png" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim JumpSuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ad, rerum modi quibusdam necessitatibus quisquam eos quaerat. Laborum pariatur optio ex iusto atque illo possimus minus veritatis odit iure vel aut mollitia impedit praesentium rerum, molestiae, repellendus quam inventore commodi animi doloremque laudantium repudiandae dolorem aliquid. Cumque, quasi vero!</Desc>
                <Price>Rs 500</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color:</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSize>
                            <FilterOption>XS</FilterOption>
                            <FilterOption>S</FilterOption>
                            <FilterOption>M</FilterOption>
                            <FilterOption>L</FilterOption>
                            <FilterOption>XL</FilterOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon onClick={()=>handleQuan("dec")} />
                        <Amount>{quan}</Amount>
                        <AddIcon onClick={()=>handleQuan("inc")} />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default IndProduct