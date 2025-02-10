import styled from "styled-components";



export const StyleHero = styled.section`
  background-image: url('https://i.im.ge/2025/02/10/H01cfS.HeroImage.png'); 
  background-size: cover;  
  background-position: right;  
  height: 580px;
  width: 100%; 

  &[aria-label] {
  font-size: 18px;
  }

  @media(max-width: 1080px){
      background-position: right; 
      
      }
      
  @media(max-width: 600px){
      height: 100vh;
      background-image: url('https://i.im.ge/2025/02/10/H018rz.heroMobille.png'); 
  }
    
    

  .hero_container{
    padding-top: 140px;
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;

    @media(max-width: 1080px){
          height: 100%;
          text-align: center;
          padding-top: 110px;
          margin: 0 auto;
    }
    

    &_content{
        height: max-content;
        padding-top: 16px;
        max-width: 540px;
        display: flex;
        flex-direction: column;
        gap: 36px;

        @media(max-width: 1080px){
          max-width: max-content;
        }

  
    }
  }
`
