import Styled from 'styled-components';

export const ModalContainer = Styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index:2;
background : rgb(0,0,0,0.3);
    display : flex;
    align-items : center;
    justify-content : center;
    #modal {
        boder-radius:10%;
        background : var(--mainWhite);
        margin:180px 0 50px 0;
        padding:40px; 
    }
`;