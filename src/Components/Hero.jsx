import styled from "styled-components";
import BackImg from '../Assets/Images/back-img.png'

function Hero() {
    return(
        <Wrapper>
            <img className="hero-img" src={BackImg} alt="Hero-img" />
            <h2 className="hero-heading">All your files in one secure location, accessible anywhere.</h2>
            <p className="hero-desc">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button className="hero-btn">Get Started</button>
        </Wrapper>
    )
}

export default Hero;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

.hero-img {
    width: 720px;
    height: 534px;
}

.hero-heading {
    margin: 36px 0px 32px;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    color: #FFFFFF;
    width: 734px;
}

.hero-desc {
    margin: 0;
    margin-bottom: 32px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    width: 589px;
}

.hero-btn {
    padding: 18px 96px;
    background: linear-gradient(152.13deg, #63E1D9 -150.21%, #34A0CD 170.03%);
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
    border-radius: 28px;
    border: 0px;
}
`