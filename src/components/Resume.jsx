import { schools } from "./data"

function Resume({ fullName, email, phone, address }) {
    function EducationContent({ key, school, degree, start, end, location }) {
        return (
            <div key={key} className="resume-education-content">
                <div className="content-left">
                    <div className="date">{start} - {end}</div>
                    <div className="location">{location}</div>
                </div>
                <div className="content-right">
                    <div className="school">{school}</div>
                    <div className="degree">{degree}</div>
                </div>
            </div>
        )
    }

    return (
        <section className="resume">
            <header className="resume-top">
                <h1 className="resume-title">{fullName || "CJ Alexander"}</h1>
                <div className="resume-contact">
                    <div className="email">{email || "cjkhaled@spoof.com"}</div>
                    <div className="number">{phone || "555-555-5555"}</div>
                    <div className="address">{address || "Gainesville, FL"}</div>
                </div>
            </header>
            <div className="resume-education">
                <h2 className="resume-section-header">Education</h2>
                {schools.map(schoolObj => <EducationContent key={schoolObj.id} school={schoolObj.school} degree={schoolObj.degree} start={schoolObj.start} end={schoolObj.end} location={schoolObj.location} />)}
            </div>
        </section>
    )
}


export default Resume
