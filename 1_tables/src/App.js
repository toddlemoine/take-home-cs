import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { ConfigurableSequenceTable } from './components/ConfigurableSequenceTable';
import { configureSequence } from './actions/configureSequence';
import { saveSequenceDefinition } from './actions/saveSequenceDefinition';
import { ConfigureForm } from './components/ConfigureForm';

const widths = [20, 30, 40];

export function App({ text, sequences, activeSequence, configureSequence, saveSequenceDefinition }) {
  const showConfigure = Boolean(activeSequence);
  return (
    <div className="App">
      { text }
      <section className="tables">
        { Object.entries(sequences).map(( [sequenceId, seq ], index ) => (
          <ConfigurableSequenceTable 
            key={index} 
            sequenceId={sequenceId}
            rows={seq} 
            width={widths[index]}
            onConfigureClick={() => configureSequence(sequenceId)} />))
            }
      </section>
      { showConfigure && 
        <ConfigureForm 
          sequenceId={activeSequence} 
          onSubmit={saveSequenceDefinition} />}
    </div>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = { configureSequence, saveSequenceDefinition }; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
