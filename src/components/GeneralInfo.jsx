import Input from "./Input"

function GeneralInfo({ fullName, handleNameChange, email, handleEmailChange, phone, handlePhoneChange, address, handleAddressChange }) {
    return (
        <section className="container">
            <h2 className="container-title">General Information</h2>
            <form>
                <Input value={fullName} label="Full name" handleChange={handleNameChange}/>
                <Input value={email} label="Email" handleChange={handleEmailChange}/>
                <Input value={phone} label="Phone" handleChange={handlePhoneChange}/>
                <Input value={address} label="Address" handleChange={handleAddressChange}/>
            </form>
            
        </section>
    )
}

export default GeneralInfo