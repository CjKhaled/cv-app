import { useState } from "react"
import Input from "./Input"

function Education({ school, handleSchoolChange, degree, handleDegreeChange, start, handleStartChange, end, handleEndChange, location, handleLocationChange }) {
    const [active, setActive] = useState(false);
    const educations = []

    function handleClick() {
        setActive(!active)
    }

    if (active) {
        return (
            <section className="container">
                <div className="collapsable-element">
                    <h2 className="container-title">Education</h2>
                    <button onClick={handleClick} className="open">{active ? 'Close' : 'Open'}</button>
                </div>
                <Input value={school} label="School" handleChange={handleSchoolChange}/>
                <Input value={degree} label="Degree" handleChange={handleDegreeChange} />
                <Input value={start} label="Start Date" handleChange={handleStartChange} />
                <Input value={end} label="End Date" handleChange={handleEndChange} />
                <Input value={location} label="Location" handleChange={handleLocationChange} />
            </section>
        )
    }

    return (
        <section className="container">
            <div className="collapsable-element">
                <h2 className="container-title">Education</h2>
                <button onClick={handleClick} className="open">{active ? 'Close' : 'Open'}</button>
            </div>
        </section>
    )
}

export default Education