import * as React from 'react';

import * as style from './Form.module.scss';

const Form: React.FC = () => (
  <form className={style.form}>
    <label className={style.label} htmlFor="title">
      <input className={style.input} id="title" name="title" placeholder="Paper Title" />
    </label>

    <label className={style.label} htmlFor="auhor">
      <select id="author" name="author">
        <option value="">Select Author</option>
      </select>
    </label>

    <button className={style.button} type="submit">
      Submit
    </button>
  </form>
);

Form.displayName = 'Form';

export default Form;
