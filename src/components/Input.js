import { findByLabelText } from '@testing-library/react';
import styled from 'styled-components';

export default function Input({ label, placeholder }) {
  return (
    <Wrapper>
      <label>{label}</label>
      <RawData placeholder={placeholder}></RawData>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: lightpink;
`;

const RawData = styled.input`
  font-size: 0.7rem;
  width: 70%;
  padding: 7px 10px;
  margin: 8px 0;
  border: 1px solid crimson;
  border-radius: 4px;
  background-color: azure;
  color: rgb(11, 11, 46);
  outline: none;
  resize: none;
`;
