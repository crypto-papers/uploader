import * as React from 'react';

import Button, { ButtonColor, ButtonType } from '../Button/Button';
import * as s from './Form.module.scss';

const { ipcRenderer, remote } = window.require('electron');
const mainProcess = remote.require('./main');

const Form: React.FC = () => (
  <form className={s.form}>
    <div>
      <div className={s.preview}>No Preview Available</div>
      <button type="button" onClick={(): void => mainProcess.getFile()}>
        Upload Paper
      </button>
    </div>

    <div className={s.upperform}>
      <label className={s.label} htmlFor="title">
        Title:
        <input className={s.input} id="title" name="title" placeholder="Paper Title" />
      </label>

      <label className={s.label} htmlFor="sub-title">
        Subtitle:
        <input className={s.input} id="sub-title" name="sub-title" placeholder="Paper Subtitle" />
      </label>

      <label className={s.label} htmlFor="auhor">
        Author(s):
        <select id="author" name="author">
          <option value="">Select Author</option>
        </select>
      </label>
    </div>

    <div className={s.submit}>
      <Button color={ButtonColor.BLUE} label="Submit" type={ButtonType.SUBMIT} />
    </div>
  </form>
);

Form.displayName = 'Form';

export default Form;
