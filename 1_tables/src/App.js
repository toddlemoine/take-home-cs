import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { ConfigurableSequenceTable } from './components/ConfigurableSequenceTable';
import { configureSequence } from './actions/configureSequence';
import { saveSequenceDefinition } from './actions/saveSequenceDefinition';
import { cancelSaveSequenceDefinition } from './actions/cancelSaveSequenceDefinition';
import { ConfigureForm } from './components/ConfigureForm';

export function App({ sequenceDefinitions, sequences, activeSequence, configureSequence, saveSequenceDefinition, cancelSaveSequenceDefinition }) {
  const showConfigure = Boolean(activeSequence);
  return (
    <div className="app">
      <section className="tables">
        { Object.entries(sequences).map(( [sequenceId, seq ]) => (
          <ConfigurableSequenceTable 
            key={sequenceId} 
            sequenceId={sequenceId}
            rows={seq} 
            width={sequenceDefinitions[sequenceId].width}
            onConfigureClick={() => configureSequence(sequenceId)} />))
            }
      </section>
      { showConfigure && 
        <ConfigureForm 
          key={activeSequence}
          sequenceId={activeSequence} 
          sequenceDef={sequenceDefinitions[activeSequence]}
          onSubmit={saveSequenceDefinition} 
          onCancel={cancelSaveSequenceDefinition}
          />}
    </div>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = { configureSequence, saveSequenceDefinition, cancelSaveSequenceDefinition }; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
