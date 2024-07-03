

function Resume({ fullName, email, phone, address }) {
    return (
        <section className="resume">
            <header className="resume-top">
                <h1 className="resume-title">{fullName || "CJ Alexander"}</h1>
                <div className="resume-contact">
                    <div className="email">{email || "cjkhaled@spoof.com"}</div>
                    <div className="number">{phone || "555-555-5555"}</div>
                    <div className="address">{address || "Las Vegas"}</div>
                </div>
            </header>
        </section>
    )
}


export default Resume
