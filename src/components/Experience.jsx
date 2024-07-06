import { useState } from "react";
import { jobs } from "./data";
import Input from "./Input";

function Experience({
  company,
  position,
  start2,
  end2,
  location2,
  desc,
  handleCompanyChange,
  handlePositionChange,
  handleStart2Change,
  handleEnd2Change,
  handleLocation2Change,
  handleDescChange,
  clearText,
  changeExistingJobInfo,
}) {
  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const [counter, setCounter] = useState(jobs.length);
  const [index, setIndex] = useState(0);
  const [add, setAdd] = useState(true); // whether we are adding a new school or editing an existing one
  const [showDelete, setShowDelete] = useState(false);

  function toggleExperienceSection() {
    setActive(!active);
    cancelEdit();
  }

  function addJob() {
    // adding a new Job
    setShowDelete(false);
    setEdit(true);
    setAdd(true);
  }

  function deleteJob() {
    cancelEdit();
    jobs.splice(index, 1);
    // when deleting we need to make sure the id logic is correct
    for (let i = 0; i < jobs.length; i++) {
      jobs[i].id = i;
    }
    setCounter(counter - 1);
  }

  function cancelEdit() {
    setEdit(false);
    clearText();
  }

  function saveAddJob() {
    jobs.push({
      company: company,
      position: position,
      start2: start2,
      end2: end2,
      location2: location2,
      desc: desc,
      id: counter,
    });
    setCounter(counter + 1);
    cancelEdit();
  }

  function saveEditJob() {
    jobs[index] = {
      company: company,
      position: position,
      start2: start2,
      end2: end2,
      location2: location2,
      desc: desc,
      id: index,
    };
    cancelEdit();
  }

  function editJob(e) {
    setEdit(true);
    // editing an existing Job
    setAdd(false);
    setShowDelete(true);
    setIndex(e.target.id);
    const jobEdit = jobs[e.target.id];
    changeExistingJobInfo(
      jobEdit.company,
      jobEdit.position,
      jobEdit.start2,
      jobEdit.end2,
      jobEdit.location2,
      jobEdit.desc
    );
  }

  function showJobs() {
    return (
      <ul className="jobs">
        {jobs.map((jobObj) => (
          <li onClick={editJob} key={jobObj.id} id={jobObj.id}>
            {jobObj.company}
          </li>
        ))}
      </ul>
    );
  }

  function showForm(company, position, start2, end2, location2, desc) {
    return (
      <form>
        <Input
          value={company}
          label="Company Name"
          handleChange={handleCompanyChange}
        />
        <Input
          value={position}
          label="Position Title"
          handleChange={handlePositionChange}
        />
        <Input
          value={start2}
          label="Start Date"
          handleChange={handleStart2Change}
        />
        <Input value={end2} label="End Date" handleChange={handleEnd2Change} />
        <Input
          value={location2}
          label="Location"
          handleChange={handleLocation2Change}
        />
        <Input
          value={desc}
          label="Description"
          handleChange={handleDescChange}
        />
      </form>
    );
  }

  function showDeleteButton() {
    return (
      <button className="delete" onClick={deleteJob}>
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
        <button className="save" onClick={add ? saveAddJob : saveEditJob}>
          Save
        </button>
      </div>
    );
  }

  function showAddExperienceButton() {
    return (
      <button className="add-job" onClick={addJob}>
        Add Experience
      </button>
    );
  }

  if (active) {
    return (
      <section className="container">
        <div className="collapsable-element">
          <h2 className="container-title">Experience</h2>
          <button onClick={toggleExperienceSection} className="open">
            {active ? "Close" : "Open"}
          </button>
        </div>
        <div className="experience-content">
          {edit && showForm(company, position, start2, end2, location2, desc)}
          {!edit && showJobs()}
          {edit ? showFormButtons() : showAddExperienceButton()}
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="collapsable-element">
        <h2 className="container-title">Experience</h2>
        <button onClick={toggleExperienceSection} className="open">
          {active ? "Close" : "Open"}
        </button>
      </div>
    </section>
  );
}

export default Experience;
