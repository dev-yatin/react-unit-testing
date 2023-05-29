import React from "react";

function TestGetByRole() {
  return (
    <>
      <h1>Main Heading</h1>
      <h2>Sub-Heading</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description"></textarea>
        </div>
        <div>
          <label htmlFor="job-location"></label>
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
            <button>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TestGetByRole;
