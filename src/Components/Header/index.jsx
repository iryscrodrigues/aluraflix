import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderLink from './HeaderLink';


const StyledHeader = styled.header`
  padding: 60px 60px;
  display: flex;
  justify-content: space-between;
background: radial-gradient(circle at 1.8% 4.8%, rgb(17, 23, 58) 0%, rgb(58, 85, 148) 90%);
    border: .14vw solid #2271d1;
  box-shadow: 0 .35vw 1.39vw #2271d1;

  & img {
    width: 12vw;
    height: 3vw;
    margin: 0 3.54vw;
  }

  & nav {
    display: flex;
    gap: 1.74vw;
    margin: 0 3.54vw;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">   
        <img src="/images/Logo.png" alt="Logo AluraFlix" />
      </Link>  
      <nav>
        <HeaderLink url="/">Home</HeaderLink>
        <HeaderLink url="/novovideo">Novo Vídeo</HeaderLink>    
      </nav> 
    </StyledHeader>
  );
};

export default Header;
