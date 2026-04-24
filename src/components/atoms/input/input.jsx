import styled from 'styled-components';

export const Input = (props) => {
    const { placeholder } = props;
    return (
        <SInput type="text" placeholder={placeholder} />
    );
}

const SInput = styled.input`
    padding: 8px 16px;
    border: solid 1px #ccc;
    border-radius: 16px;
    outline: none;
`