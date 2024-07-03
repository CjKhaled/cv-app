import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education";
import Resume from "./components/Resume"
import "./styles/general.css"

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [location, setLocation] = useState('')
  

  function handleNameChange(e) {
      setFullName(e.target.value);
  }

  function handleEmailChange(e) {
      setEmail(e.target.value)
  }

  function handlePhoneChange(e) {
      setPhone(e.target.value)
  }

  function handleAddressChange(e) {
      setAddress(e.target.value)
  }

  function handleSchoolChange(e) {
    setSchool(e.target.value)
  }

  function handleDegreeChange(e) {
    setDegree(e.target.value)
  }

  function handleStartChange(e) {
    setStart(e.target.value)
  }

  function handleEndChange(e) {
    setEnd(e.target.value)
  }

  function handleLocationChange(e) {
    setLocation(e.target.value)
  }

  function clearEducationText() {
    setSchool('')
    setDegree('')
    setStart('')
    setEnd('')
    setLocation('');
  }

  function changeExistingEducationInfo(existingSchool, existingDegree, existingStart, existingEnd, existingLocation) {
    setSchool(existingSchool)
    setDegree(existingDegree)
    setStart(existingStart)
    setEnd(existingEnd)
    setLocation(existingLocation)
  }

  return (
    <main>
      <div className="app-container">
        <div className="edit-side">
          <GeneralInfo fullName={fullName} email={email} phone={phone} address={address} handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} handlePhoneChange={handlePhoneChange} handleAddressChange={handleAddressChange}/>
          <Education school={school} degree={degree} start={start} end={end} location={location} handleSchoolChange={handleSchoolChange} handleDegreeChange={handleDegreeChange} handleStartChange={handleStartChange} handleEndChange={handleEndChange} handleLocationChange={handleLocationChange} clearText={clearEducationText} changeExistingEducationInfo={changeExistingEducationInfo} />
        </div>
        <div className="resume-side">
          <Resume fullName={fullName} email={email} phone={phone} address={address} />
        </div>
      </div>
    </main>
  )
  
}

export default App

