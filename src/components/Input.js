import styled from 'styled-components';

export default function Input({ label }) {
  return (
    <form>
      <label>{label}</label>
      <RawData placeholder="e.g. Carcassonne"></RawData>
      <label>{}</label>
      <RawData placeholder="e.g. John Doe, Jane Doe"></RawData>
    </form>
  );
}

const RawData = styled.input`
  font-size: 0.9rem;
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
