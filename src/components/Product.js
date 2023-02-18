import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div `
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s;
    cursor: pointer;
`

const Container = styled.div `
    flex: 1;
    margin: 10px;
    min-width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fafd;
    position: relative;

    //when we hover on this particular element(ie Container), the given properties will be applied on Info
    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div `
    height: 280px;
    width: 300px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img `
    height: 75%;
    z-index: 2;
`

const Icon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px; 
    cursor: pointer;
    transition: transform 0.5s;

    //we can add hover effects on this pertivular element in this way
    &:hover{
        background-color: #FF7F7F;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container> 
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
                <Search />
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product