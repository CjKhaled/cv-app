import { useState } from "react";
import { schools } from "./data";
import Input from "./Input";

function Education({
  school,
  handleSchoolChange,
  degree,
  handleDegreeChange,
  start,
  handleStartChange,
  end,
  handleEndChange,
  location,
  handleLocationChange,
  clearText,
  changeExistingEducationInfo,
}) {
  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const [counter, setCounter] = useState(schools.length);
  const [index, setIndex] = useState(0);
  const [add, setAdd] = useState(true); // whether we are adding a new school or editing an existing one
  const [showDelete, setShowDelete] = useState(false);

  function toggleEducationSection() {
    setActive(!active);
    cancelEdit();
  }

  function addSchool() {
    // adding a new school
    setShowDelete(false);
    setEdit(true);
    setAdd(true);
  }

  function deleteSchool() {
    cancelEdit();
    schools.splice(index, 1);
    // when deleting we need to make sure the id logic is correct
    for (let i = 0; i < schools.length; i++) {
      schools[i].id = i;
    }
    setCounter(counter - 1);
  }

  function cancelEdit() {
    setEdit(false);
    clearText();
  }

  function saveAddSchool() {
    schools.push({
      school: school,
      degree: degree,
      start: start,
      end: end,
      location: location,
      id: counter,
    });
    setCounter(counter + 1);
    cancelEdit();
  }

  function saveEditSchool() {
    schools[index] = {
      school: school,
      degree: degree,
      start: start,
      end: end,
      location: location,
      id: index,
    };
    cancelEdit();
  }

  function editSchool(e) {
    setEdit(true);
    // editing an existing school
    setAdd(false);
    setShowDelete(true);
    setIndex(e.target.id);
    const schoolEdit = schools[e.target.id];
    changeExistingEducationInfo(
      schoolEdit.school,
      schoolEdit.degree,
      schoolEdit.start,
      schoolEdit.end,
      schoolEdit.location
    );
  }

  function showSchools() {
    return (
      <ul className="schools">
        {schools.map((schoolObj) => (
          <li onClick={editSchool} key={schoolObj.id} id={schoolObj.id}>
            {schoolObj.school}
          </li>
        ))}
      </ul>
    );
  }

  function showForm(school, degree, start, end, location) {
    return (
      <form>
        <Input
          value={school}
          label="School"
          handleChange={handleSchoolChange}
        />
        <Input
          value={degree}
          label="Degree"
          handleChange={handleDegreeChange}
        />
        <Input
          value={start}
          label="Start Date"
          handleChange={handleStartChange}
        />
        <Input value={end} label="End Date" handleChange={handleEndChange} />
        <Input
          value={location}
          label="Location"
          handleChange={handleLocationChange}
        />
      </form>
    );
  }

  function showDeleteButton() {
    return (
      <button className="delete" onClick={deleteSchool}>
        Delete
      </button>
    );
  }

  function showFormButtons() {
    return (
      <div className="form-buttons">
        {showDelete && showDeleteButton()}
        <button className="cancel" onClick={cancelEdit}>
          Cancel
        </button>
        <button className="save" onClick={add ? saveAddSchool : saveEditSchool}>
          Save
        </button>
      </div>
    );
  }

  function showAddEducationButton() {
    return (
      <button className="add-education" onClick={addSchool}>
        Add Education
      </button>
    );
  }

  if (active) {
    return (
      <section className="container">
        <div className="collapsable-element">
          <h2 className="container-title">Education</h2>
          <button onClick={toggleEducationSection} className="open">
            {active ? "Close" : "Open"}
          </button>
        </div>
        <div className="education-content">
          {edit && showForm(school, degree, start, end, location)}
          {!edit && showSchools()}
          {edit ? showFormButtons() : showAddEducationButton()}
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="collapsable-element">
        <h2 className="container-title">Education</h2>
        <button onClick={toggleEducationSection} className="open">
          {active ? "Close" : "Open"}
        </button>
      </div>
    </section>
  );
}

export default Education;
