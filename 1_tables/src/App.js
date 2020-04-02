import React from 'react';
import { connect } from 'react-redux';
import './App.css';

export function App({ text }) {
  return (
    <div className="App">
      { text }
    </div>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {}; 

export default connect(mapStateToProps, mapDispatchToProps)(App);
