import React from 'react';
import { toInt } from '../utils';
import './ConfigureForm.css';

export function SequenceId({ color }) {
  const styles = { color };
  return (
    <span className="table-key" style={styles}>{color}</span>
  )
}

function FormRow({ children }) {
  return (
    <div className="form-row">{children}</div>
  )
}

export class ConfigureForm extends React.Component {
  constructor() {
    super();
    this.form = React.createRef();
  }
  handleCancel = (e) => {
    e.preventDefault();
    this.props.onCancel();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { sequenceId, sequenceDef, onSubmit } = this.props;
    const newSequenceDef = Object.keys(sequenceDef).reduce((acc, key) => {
      const form = this.form.current;
      if (form[key]) {
        acc[key] = form[key].getAttribute('data-type') === 'int' ? toInt(form[key].value) : form[key].value;
      }
      return acc;
    }, { ...sequenceDef });
    onSubmit(sequenceId, newSequenceDef);
  }
  render() {
    const { onSubmit, sequenceId, sequenceDef } = this.props;
    return (
      <div className="configure-form">
        <h2>Table: <SequenceId color={sequenceId}>{sequenceId}</SequenceId></h2>
        <form ref={this.form} onSubmit={this.handleSubmit}>
          <FormRow>
            <label htmlFor="start">N =</label>
            <input type="text" name="start" defaultValue={sequenceDef.start} data-type="int" />
          </FormRow>
          <FormRow>
            <label htmlFor="step">X =</label>
            <input type="text" name="step" defaultValue={sequenceDef.step} data-type="int" />
          </FormRow>
          <FormRow>
            <label htmlFor="end">M =</label>
            <input type="text" name="end" defaultValue={sequenceDef.end} data-type="int" />
          </FormRow>
          <FormRow>
            <label htmlFor="width">W =</label>
            <input type="text" name="width" defaultValue={sequenceDef.width} data-type="int" />%
        </FormRow>
          <FormRow>
            <label htmlFor="w">W =</label>
            <select name="direction" defaultValue={sequenceDef.direction}>
              <option value="LTR">LTR</option>
              <option value="RTL">RTL</option>
            </select>
          </FormRow>
          <FormRow>
            <button onClick={this.handleSubmit}>Save</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </FormRow>
        </form>
      </div>
    )
  }
}
