import './Input.css';

export default function Input({ label }) {
  return (
    <form>
      <label>{label}</label>
      <input className="Input" placeholder="e.g. Carcassonne"></input>
      <label>{}</label>
      <input className="Input" placeholder="e.g. John Doe, Jane Doe"></input>
    </form>
  );
}
