import data from './recipe.json';
//import biscuits from './images/shortbread.jpg';
import styled from 'styled-components';

const GreenHeader = styled.h2 
`   font-weight: bold;
    font-size: 30px;
    color: #56b3ae;
` ;
const IngredientBox = styled.div
` grid-area: 1 / 7 / 5 / 10;
    line-height: 30px;`;

const IngredientDetails = styled.div
    ` font-size: 16px
    line-height: 30px;`;

const HeroImage = styled.img
    ` width: 100%;
    height: 275px;
    padding: 30px 0;
    object-fit: cover;`;

function Ingredients({ Name, ImgSource }) {
    return (
        <IngredientBox>
            <GreenHeader>Ingredients</GreenHeader>
        <IngredientDetails>           
            <ul>
                {data[Name].ingredients.map((ingredients) => {
                    return <li>{ingredients}</li>
                })}
            </ul>
        </IngredientDetails>
            <HeroImage src={ImgSource} alt="pile o'biscuits"></HeroImage>
        </IngredientBox>
    );
}

export default Ingredients;