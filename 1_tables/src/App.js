import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { ConfigurableSequenceTable } from './components/ConfigurableSequenceTable';
import { configureSequence } from './actions/configureSequence';

const widths = [20, 30, 40];

export function App({ text, sequences, configureSequence }) {
  return (
    <div className="App">
      { text }
      <section className="tables">
        { sequences.map(( seq, index ) => (
          <ConfigurableSequenceTable key={index} 
            index={index}
            rows={seq} 
            width={widths[index]}
            onConfigureClick={() => configureSequence(index)} />))
            }
      </section>
    </div>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = { configureSequence }; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
