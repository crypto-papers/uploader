import React from 'react';

const Form = () => (
  <div className="form">
    <form>
      <fieldset>

        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            type="text"
          />
        </label>

        <label htmlFor="author">
          Author:
          <input
            id="author"
            name="author"
            type="text"
          />
        </label>

      </fieldset>
    </form>
  </div>
);

export default Form;
