import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { ConfigurableSequenceTable } from './components/ConfigurableSequenceTable';

export function App({ text, sequences, configureSequence }) {
  return (
    <div className="App">
      { text }
      <section className="tables">
        { sequences.map(( seq, index ) => <ConfigurableSequenceTable key={index} rows={seq} onConfigureClick={() => configureSequence(index)} />)}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
