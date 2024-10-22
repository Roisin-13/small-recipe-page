import data from './recipe.json';
import styled from 'styled-components';

const FooterBox = styled.footer
`  height: 100px;
  background: #DDF0EE;
  color: #56b3ae;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 15px;
`;

function Footer() {
    return (
        <FooterBox>
        {data.footer.footer}
        </FooterBox>
    );
}

export default Footer;