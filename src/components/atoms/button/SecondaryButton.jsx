import styled from 'styled-components';

export const SecondaryButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>
    );
};

const SButton = styled.button`
    background-color: #11999e;
    color: #fff;  
    padding: 16px 24px; //上下　左右
    border: none;
    border-radius: 16px;
    outline: none;
    font-size: 16px;
    &:hover {
        opacity: 0.8;
    }
`

