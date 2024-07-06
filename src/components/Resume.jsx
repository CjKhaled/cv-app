import { schools, jobs } from "./data"

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

    function ExperienceContent({ key, company, position, start2, end2, location2, desc }) {
        return (
            <div key={key} className="resume-experience-content">
                <div className="content-left">
                    <div className="date">{start2} - {end2}</div>
                    <div className="location">{location2}</div>
                </div>
                <div className="content-right">
                    <div className="company">{company}</div>
                    <div className="position">{position}</div>
                    <div className="desc">{desc}</div>
                </div>
            </div>
        )
    }

    return (
        <section className="resume">
            <header className="resume-top">
                <h1 className="resume-title">{fullName}</h1>
                <div className="resume-contact">
                    <div className="email">{email}</div>
                    <div className="number">{phone}</div>
                    <div className="address">{address}</div>
                </div>
            </header>
            <div className="resume-education">
                <h2 className="resume-section-header">Education</h2>
                {schools.map(schoolObj => <EducationContent key={schoolObj.id} {...schoolObj} />)}
            </div>
            <div className="resume-experience">
                <h2 className="resume-section-header">Experience</h2>
                {jobs.map(jobObj => <ExperienceContent key={jobObj.id} {...jobObj} />)}
            </div>
        </section>
    )
}


export default Resume
