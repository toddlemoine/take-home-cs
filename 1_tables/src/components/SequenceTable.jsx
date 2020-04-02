import React from 'react';
import './SequenceTable.css';

function SequenceTable({ rows }) {
  return (
    <table className="sequence-table">
      <tbody>
        {rows.map(row => (
          <tr>
            {row.map(val => (
              <td disabled={val === null}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { SequenceTable };
