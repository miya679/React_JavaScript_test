import styled from 'styled-components';

export const PrimaryButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>
    );
};

const SButton = styled.button`
    background-color: #40514#;
    color: #fff;  
    padding: 16px 24px; //上下　左右
    border: none;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    &:hover {
        opacity: 0.8;
    }
`

