import React from 'react';
import { SequenceTable } from './SequenceTable';

export function ConfigurableSequenceTable({ rows, onConfigureClick }) {
  return (
    <div className="configurable-sequence-table">
      <SequenceTable rows={rows} />
      <button onClick={onConfigureClick}>Configure</button>
    </div>
  )
}
