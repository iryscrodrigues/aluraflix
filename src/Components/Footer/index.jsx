import styled from "styled-components";


const DivFooter = styled.footer `
  max-width: 100vw;
  width: 100%;
  height: 8vw;
background: radial-gradient(circle at 1.8% 4.8%, rgb(17, 23, 58) 0%, rgb(58, 85, 148) 90%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: .14vw solid #2271d1;
  box-shadow: 0 .35vw 1.39vw #2271d1;
`;

const ImgFooter = styled.img `
  width: 12vw;
  height: 3vw;
`;

function Footer() {
  return (
    <DivFooter>
      
    <ImgFooter src="/images/Logo.png" alt="Logo AluraFlix" />

    </DivFooter>
  );
}

export default Footer;