import React from 'react';
import { SequenceTable } from './SequenceTable';
import './ConfigurableSequenceTable.css';

export function ConfigurableSequenceTable({ rows, sequenceId, width, onConfigureClick }) {
  const widthPercent = `${width}%`
  const styles = { width: widthPercent }
  return (
    <div className="configurable-sequence-table" style={styles} data-sequence-id={sequenceId}>
      <SequenceTable key={sequenceId} rows={rows} />
      <footer>
        <button onClick={onConfigureClick}>Configure</button>
        <div className="width-text">{widthPercent}</div>
      </footer>
    </div>
  )
}
