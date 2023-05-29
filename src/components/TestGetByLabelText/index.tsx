import React from "react";

function TestGetByLabelText() {
  return (
    <>
      <h1>Main Heading</h1>
      <h2>Sub-Heading</h2>
      <img src="" alt="empty" />
      <div title="empty"></div>
      <div data-testid="test123"></div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" placeholder="Age" />
        </div>

        <div>
          <label htmlFor="salary">Salary</label>
          <input id="salary" type="number" value={30000} onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="description">Name</label>
          <textarea id="description"></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select country</option>
            <option value="IND">India</option>
            <option value="US">USA</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to terms and conditions
          </label>
          <div>
            <button aria-label="Submit">Submit</button>
            <button>Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TestGetByLabelText;
