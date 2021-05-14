import styled from 'styled-components'

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            <NavMenu>menu</NavMenu>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;  //Header always stays on top, more priority
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;    
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.nav`
   align-items: center;
   display: flex;
   flex-flow: nowrap;  // It makes all the menu contents in a single row 
   height: 100%;
   justify-content: flex-start;
   margin: 0px;
   padding: 0px;
   
`;



export default Header;