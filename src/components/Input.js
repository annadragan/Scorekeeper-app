import styled from 'styled-components';

export default function Input({
  labelDescription,
  name,
  value,
  placeholder,
  onChange,
  required,
}) {
  return (
    <>
      <label htmlFor={name}>{labelDescription}</label>
      <InputStyled
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}


const InputStyled = styled.input`
  font-size: 0.7rem;
  padding: 7px 10px;
  margin: 8px 0;
  border: 1px solid crimson;
  border-radius: 4px;
  background-color: azure;
  color: rgb(11, 11, 46);
  outline: none;
  resize: none;
`;