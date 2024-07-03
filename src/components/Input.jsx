import "../styles/components.css"

function Input({ label, value, handleChange }) {
    return (
        <div className="input-element">
            <label>{label}</label>
            <input value={value} onChange={handleChange}/>
        </div>
    )
}


export default Input