import React from 'react';
import './ConfigureForm.css';

export function SequenceId({ color }) {
  const styles = { color };
  return (
    <span className="table-key" style={styles}>{color}</span>
  )
}

export function ConfigureForm({ onSubmit, sequenceId }) {
  return (
    <div className="configure-form">
      <h2>Table: <SequenceId color={sequenceId}>{sequenceId}</SequenceId></h2>
      <form onSubmit={onSubmit}>


      </form>
    </div>
  )
}
