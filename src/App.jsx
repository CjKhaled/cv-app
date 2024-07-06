import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Resume from "./components/Resume";
import "./styles/general.css";
import Experience from "./components/Experience";

function App() {
  const [fullName, setFullName] = useState("Saul Goodman");
  const [email, setEmail] = useState("sgoodman@spoof.com");
  const [phone, setPhone] = useState("555-555-5555");
  const [address, setAddress] = useState("Albuquerque, New Mexico");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [start2, setStart2] = useState("");
  const [end2, setEnd2] = useState("");
  const [location2, setLocation2] = useState("");
  const [desc, setDesc] = useState("");

  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }

  function handleStart2Change(e) {
    setStart2(e.target.value);
  }

  function handleEnd2Change(e) {
    setEnd2(e.target.value);
  }

  function handleLocation2Change(e) {
    setLocation2(e.target.value);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleNameChange(e) {
    setFullName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegree(e.target.value);
  }

  function handleStartChange(e) {
    setStart(e.target.value);
  }

  function handleEndChange(e) {
    setEnd(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function clearEducationText() {
    setSchool("");
    setDegree("");
    setStart("");
    setEnd("");
    setLocation("");
  }

  function clearExperienceText() {
    setCompany("");
    setPosition("");
    setStart2("");
    setEnd2("");
    setLocation2("");
    setDesc("");
  }

  function changeExistingEducationInfo(
    existingSchool,
    existingDegree,
    existingStart,
    existingEnd,
    existingLocation
  ) {
    setSchool(existingSchool);
    setDegree(existingDegree);
    setStart(existingStart);
    setEnd(existingEnd);
    setLocation(existingLocation);
  }

  function changeExistingJobInfo(
    existingCompany,
    existingPosition,
    existingStart2,
    existingEnd2,
    existingLocation2,
    existingDesc
  ) {
    setCompany(existingCompany);
    setPosition(existingPosition);
    setStart2(existingStart2);
    setEnd2(existingEnd2);
    setLocation2(existingLocation2);
    setDesc(existingDesc);
  }

  return (
    <main>
      <div className="app-container">
        <div className="edit-side">
          <GeneralInfo
            fullName={fullName}
            email={email}
            phone={phone}
            address={address}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handlePhoneChange={handlePhoneChange}
            handleAddressChange={handleAddressChange}
          />
          <Education
            school={school}
            degree={degree}
            start={start}
            end={end}
            location={location}
            handleSchoolChange={handleSchoolChange}
            handleDegreeChange={handleDegreeChange}
            handleStartChange={handleStartChange}
            handleEndChange={handleEndChange}
            handleLocationChange={handleLocationChange}
            clearText={clearEducationText}
            changeExistingEducationInfo={changeExistingEducationInfo}
          />
          <Experience
            company={company}
            position={position}
            start2={start2}
            end2={end2}
            location2={location2}
            desc={desc}
            handleCompanyChange={handleCompanyChange}
            handlePositionChange={handlePositionChange}
            handleStart2Change={handleStart2Change}
            handleEnd2Change={handleEnd2Change}
            handleLocation2Change={handleLocation2Change}
            handleDescChange={handleDescChange}
            clearText={clearExperienceText}
            changeExistingJobInfo={changeExistingJobInfo}
          />
        </div>
        <div className="resume-side">
          <Resume
            fullName={fullName}
            email={email}
            phone={phone}
            address={address}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
