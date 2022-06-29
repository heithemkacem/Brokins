import styled from 'styled-components'

export const Container = styled.div`
    padding: 40px 50px;
    background-color: #a102f2;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width:1200px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 50px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;
`

export const Link = styled.a`
    color: #fff;
    margin-bottom: 10px;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`

export const Title = styled.p`
    font-size: 20px;
    color: #fff ;
    margin-bottom: 10px;
`

export const Paragagraph = styled.p`
    font-size: 16px;
    color: #fff;
    margin-bottom: 15px
`
