import styled from 'styled-components'

export const ContentRight = styled.div`
    padding-left: 377px;
    box-sizing: border-box;
    position: relative;
    margin-top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
    min-height: calc(100vh - 116px);
    flex-direction: column;

    @media only screen and (max-width: 1024px){
        padding-left: 0px;
        width: 100%;
    }
`;

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 116px);
    display: flex;
    flex-direction: column;
`;

export const H4 = styled.p`
    font-size: 28px;
    letter-spacing: 0;
    font-family: Rajdhani, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    
`

export const Button = styled.a`
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 5px;
    width: 200px;
    height: 40px;
    font-family: Rajdhani,sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.42, 0, 1, 1.05);
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration:none;

    :hover{
        background: #fff;
        color: #461b82;
    }
`

export const NavigateButton = styled.img`
    width: 100px;
    height: auto;
    position: absolute;
    top: 48%;
    left: 560px;
    cursor: pointer;

    @media only screen and (max-width: 1024px){
        border-radius: 50%;
        width: 30px;
        left: 20px;
        cursor: pointer;
        bottom: 36px;
        position: fixed;
        z-index: 9999;
        background: #ffffffde;
        width: 25px;
        height: 25px;
        background: #21132c;
        border: 2px solid #fff;
        padding: 10px;
        box-shadow: -5px 4px 10px 0px #000000d4;
        top: initial;
    }
`
export const NavigateSmallButton = styled.img`
    width: 33px;
    height: auto;
    position: absolute;
    top: 72px;
    left: 400px;
    cursor: pointer;

    @media only screen and (max-width: 1024px){
        border-radius: 50%;
        width: 30px;
        left: 20px;
        cursor: pointer;
        bottom: 36px;
        position: fixed;
        z-index: 9999;
        background: #ffffffde;
        width: 25px;
        height: 25px;
        background: #21132c;
        border: 2px solid #fff;
        padding: 10px;
        box-shadow: -5px 4px 10px 0px #000000d4;
        top: initial;
    }
`
