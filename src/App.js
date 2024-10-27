import './App.css';
import BakeKit from './components/kit';
import Method from './components/instructions';
import Ingredients from './components/ingredients';
import Footer from './components/footer';
import insta from './components/images/instaGallery.png';
import data from './components/recipe.json'
import styled from 'styled-components';

import biscuits from './components/images/shortbread.jpg';

const Page = styled.div
  ` background-color: #f7f2eb;
  font-family: 'Ubuntu', sans-serif;`;

const GridContainer = styled.div
`  max-width: 1350px;
  background: white;
  display: grid;
  padding: 30px;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, 275px);
  grid-gap: 30px;
  margin: auto;`;

const Header = styled.header
`     background-color: #e15a97;
      padding: 30px 0;
      display: flex;
      justify-content: center;`;

const Title = styled.h1
`   color: #ffffff;
    font-family: "Alex Brush", cursive;
    font-weight: 700;
    font-size: 70px
`;
const InstaLink = styled.a
` grid-area: 4/1/5/3;
    padding: 20px;
`;

function App() {
  const name = "shortbread";
  return (
    <>
      <Page>        
          <Header>
          <Title>{data[name].name}</Title>
          </Header>
        <GridContainer>
            <BakeKit
              Name={name}
            />
          <Method
            Name={name}
          />
          <Ingredients
            Name={name}
            ImgSource={biscuits}
          />
          <InstaLink href="/">
            <img src={insta}></img>
        </InstaLink>
        </GridContainer>
      </Page>
      <Footer />
    </>
  );
}

export default App;
