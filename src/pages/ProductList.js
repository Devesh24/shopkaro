import styled from "styled-components"
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import {useState} from 'react'

const Container = styled.div ``

const Title = styled.h1 `
    margin: 20px;
    text-decoration: underline;
`

const FilterContainer = styled.div `
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div `
    margin: 20px;
    ${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})}   
`

const FilterText = styled.span `
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`

const Select = styled.select `
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`
const Option = styled.option ``


const ProductList = () => {

    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const location = useLocation();
    // console.log(location) ---- u can see what we r getting in location

    //to get the category name from url:
    const cat = location.pathname.split("/")[2]
    // console.log(cat);

    const handlefilter = (e) => {
        const value = e.target.value
        setFilter({
            ...filter,
            [e.target.name] : value
        })
    }
    // console.log(filter); 

  return (
    <Container>
       <Navbar /> 
       <Announcement /> 
       <Title>DRESSES</Title>
       <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handlefilter}>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name="size" onChange={handlefilter}>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={e => setSort(e.target.value)}>
                    <Option defaultValue value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
       </FilterContainer>
       <Products cat={cat} filter={filter} sort={sort} />
       <NewsLetter />
       <Footer />
    </Container>
  )
}

export default ProductList