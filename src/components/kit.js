import data from './recipe.json';
import kit from './images/AC_SummaryIcon_BAKE-KIT_72x85.png';
import keyline from './images/AC_SummaryIcon_KEYLINE_406x14.png';
import cost from './images/AC_SummaryIcon_COST_56x66.png';
import difficulty from './images/AC_SummaryIcon_DIFFICULTY_85x60.png';
import time from './images/AC_SummaryIcon_TIME_71x65.png';
import amount from './images/AC_SummaryIcon_YIELD_73x61.png';
import styled from 'styled-components';

const GreenBox = styled.div
`   grid-area: 1/1/4/2;
    padding: 20px;
    max-width: 275px;
    background-color: #eef7f7;
`;

const KitSection = styled.div
`   margin-top: 10px;
    margin-bottom: 30px;
    display: flex;
`;

const KitDetails = styled.div
`   font-size: 16px;
    line-height: 25px;
    padding: 0 15px;
`;

const KitIcon = styled.img
`   width: ${props => props.$small ? "40px" : "50px" } ;
    height: ${props => props.$small ? "35px" : "45px" } ;
`;

const Keyline = styled.img
`  display: block;
  margin: 5px auto;
  width: 90%;
`;

const KitSubHeader = styled.p
    `color: #56b3ae;
    font-size: 25px;
    line-height: 30px;
    font-weight: bold;
`;

function BakeKit() {
    return ( 
        <GreenBox>
            <KitSection>
                <KitIcon src={kit} alt="spatula icon"></KitIcon>
                <KitDetails>
                    <KitSubHeader>Bake-kit</KitSubHeader>
                    <ul>
                        {data.shortbread.bakeKit.map((kit) => {
                            return <li>{kit}</li>
                        })}
                    </ul>
                </KitDetails>
            </KitSection>

            <Keyline src={keyline}></Keyline>

            <KitSection>
                <KitIcon $small src={time} alt="clock icon"></KitIcon>
                <KitDetails>
                    <KitSubHeader>Time</KitSubHeader>
                    <ul>
                        {data.shortbread.timing.map((prep) => {
                            return <li>{prep}</li>
                        })}
                    </ul>
                </KitDetails>
            </KitSection>
         
            <KitSection>
                <KitIcon $small src={amount} alt="biscuit icon" ></KitIcon>
                <KitDetails>
                    <KitSubHeader>Yield</KitSubHeader>
                <p>{data.shortbread.yield}</p>
                </KitDetails>
            </KitSection>

            <KitSection>
                <KitIcon $small src={cost} alt="money icon"></KitIcon>
                <KitDetails>
                    <KitSubHeader>Cost</KitSubHeader>
                <p>{data.shortbread.cost}</p>
                </KitDetails>
            </KitSection>

            <KitSection>
                <KitIcon $small src={difficulty} alt="difficulty icon"></KitIcon>
            <KitDetails>
                <KitSubHeader>Difficulty</KitSubHeader>
                <p>{data.shortbread.difficulty}</p>
                </KitDetails>
            </KitSection>
        </GreenBox>
    );
}

export default BakeKit;