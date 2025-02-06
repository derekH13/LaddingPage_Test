import styled from "styled-components";



export const StyleHero = styled.section`
  background-image: url('src/assets/images/HeroImage.png'); 
  background-size: cover;  
  background-position: right;  
  height: 620px;
  width: 100%; 

  .container{
    padding-top: 120px;
    max-width: 700px;
    width: 100%;

    &_content{
        height: max-content;
        padding-top: 20px;
        max-width: 540px;
        display: flex;
        flex-direction: column;
        gap: 36px;

  
    }
  }
`