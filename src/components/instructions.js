import data from './recipe.json';
import styled from 'styled-components';

const PinkHeader = styled.h2
`   font-weight: bold;
    font-size: 30px;
    color: #e15a97;
` ;
const MethodBox = styled.div
`   grid-area: 1 / 2 / 5 / 7;
    min-width: 275px;
    font-size: 20px;
    line-height: 30px;
    padding: 0 30px;
`;

function Method() {
    return (  
        <MethodBox>
            <PinkHeader>Method</PinkHeader>
            <ol>
                {data.shortbread.method.map((step) => {
                    return <li>{step}</li>
                })}
            </ol>
        </MethodBox>
       );
}

export default Method;