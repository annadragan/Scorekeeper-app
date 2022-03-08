import './Create.css';

export default function Create({ take, onClick }) {
  return (
    <button className="CreateButton" onClick={onClick}>
      {take}
    </button>
  );
}
