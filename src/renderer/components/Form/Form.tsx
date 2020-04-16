import * as React from 'react';

import Button, { ButtonColor, ButtonType } from '../Button/Button';
import './Form.module.scss';

const { ipcRenderer, remote } = window.require('electron');
const mainProcess = remote.require('./main');

const acceptFileUpload = (): void => {
  ipcRenderer.on('file-opened', (e, filepath, contents) => {
    mainProcess.createPreviewPane(filepath);
  });

  mainProcess.getFile();
};

const Form: React.FC = () => (
  <form styleName="form">
    <div>
      <div styleName="preview">No Preview Available</div>
      <button type="button" onClick={(): void => acceptFileUpload()}>
        Upload Paper
      </button>
    </div>

    <div styleName="upperform">
      <label htmlFor="title" styleName="label">
        Title:
        <input id="title" name="title" placeholder="Paper Title" styleName="input" />
      </label>

      <label htmlFor="sub-title" styleName="label">
        Subtitle:
        <input id="sub-title" name="sub-title" placeholder="Paper Subtitle" styleName="input" />
      </label>

      <label htmlFor="auhor" styleName="label">
        Author(s):
        <select id="author" name="author">
          <option value="">Select Author</option>
        </select>
      </label>
    </div>

    <div styleName="submit">
      <Button color={ButtonColor.BLUE} label="Submit" type={ButtonType.SUBMIT} />
    </div>
  </form>
);

Form.displayName = 'Form';

export default Form;
