import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react"; 
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div `
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`

const Arrow = styled.div `
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

    //to center vertically:
    top: 0;
    bottom: 0;
    margin: auto;

    //to provide the position horizontally:
    //we can use props in styled components
    left: ${props => props.direction === "left" && "10px"}; //if direction of arrow is left
    right: ${props => props.direction === "right" && "10px"}; //if direction of arrow is right
`

const Wrapper = styled.div `
    height: 100%;
    display: flex;
    transition: transform 1.5s;

    //to move slide the images of the slider
    transform: translateX( ${props => props.slideIndex * -100}vw );
`

const Slide = styled.div `
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div `
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
const Image = styled.img `
    height: 80%;
`
const InfoContainer = styled.div `
    flex: 1;
    padding: 80px;
`
const Title = styled.h1 `
    font-size: 70px;
`
const Desc = styled.p `
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button `
    padding: 10px;
    font-size: 20px;
    background-color: teal;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover{
        background-color: #62B6B7;
        color: black;
    }
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left")
        {
            setSlideIndex(prev => prev>0 ? prev-1 : 2)
        }
        else
        {
            setSlideIndex(prev => prev<2 ? prev+1 : 0)
        }
    }

  return (
    <Container>

        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>

        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>

    </Container>
  )
}

export default Slider