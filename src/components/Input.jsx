import "../styles/components.css";

function Input({ label, value, handleChange, height = "10px" }) {
  return (
    <div className="input-element">
      <label>{label}</label>
      <input value={value} onChange={handleChange} style={{ height: height }} />
    </div>
  );
}

export default Input;
