import React from 'react';
import './SequenceTable.css';

class SequenceTable extends React.Component {
  render() {
    const { rows } = this.props;
    return (
      <table className="sequence-table">
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((val, index) => (
                <td key={index} disabled={val === null}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export { SequenceTable };
