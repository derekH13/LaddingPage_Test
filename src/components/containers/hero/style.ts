import styled from "styled-components";



export const StyleHero = styled.section`
  background-image: url('src/assets/images/HeroImage.png'); 
  background-size: cover;  
  background-position: right;  
  height: 620px;
  width: 100%; 
  

  .hero_container{
    padding-top: 180px;
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;

    &_content{
        height: max-content;
        padding-top: 16px;
        max-width: 540px;
        display: flex;
        flex-direction: column;
        gap: 36px;

  
    }
  }
`