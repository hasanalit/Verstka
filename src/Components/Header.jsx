import ListImg from '../Assets/Images/list.png';
import styled from 'styled-components';

function Header() {
    return (
      <Wrapper>
      <div className="header">
        <div className='header-logo'>
        <img src={ListImg} alt="list-img" />
        <h1 className='header-text'>Fylo</h1>
        </div>
        <ul className='header-list'>
          <li className='header-item'>Features</li>
          <li className='header-item'>Team</li>
          <li className='header-item'>Sign In</li>
        </ul>
      </div>
      </Wrapper>
    );
  }

  export default Header;

  const Wrapper = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 73px 80px 75px;
    max-width: 1280px;
  }

  .header-logo {
    display: flex;
    align-items: center;
  }

  .header-text {
    margin: 0;
    margin-left: 17px;
    font-weight: 600;
    font-size: 50px;
    line-height: 50px;
    color: #FFFFFF;
  }

  .header-list {
    display: flex;
    align-items: center;
    margin: 0;
    margin-left: -57px;
    padding: 0;
    list-style: none;
  }

  .header-item {
    margin-left: 57px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    font-style: normal;
  }
  `
