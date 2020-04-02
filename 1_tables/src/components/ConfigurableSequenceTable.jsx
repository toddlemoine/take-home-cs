import React from 'react';
import { SequenceTable } from './SequenceTable';
import './ConfigurableSequenceTable.css';

export function ConfigurableSequenceTable({ rows, index, width, onConfigureClick }) {
  const widthPercent = `${width}%`
  const styles = { width: widthPercent }
  return (
    <div className="configurable-sequence-table" style={styles} data-table-index={index}>
      <SequenceTable rows={rows} />
      <footer>
        <button onClick={onConfigureClick}>Configure</button>
        <div className="width-text">{widthPercent}</div>
      </footer>
    </div>
  )
}
