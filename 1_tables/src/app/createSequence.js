const defaultOptions = {
  start: 1,
  end: 10,
  step: 1,
  switchAfter: 5
};

function isEven(num) {
  return num % 2 === 0;
}

function switchback(seq, size) {
  const rows = [];
  let curr = 0;
  while (curr < seq.length) {
    const end = curr + size;
    const row = seq.slice(curr, end);
    rows.push(row);
    
    curr = end;
  }
  // Switch every odd row
  const switchedRows = rows.map( (row, index) => isEven(index) ? row : row.reverse() );
  return switchedRows;
}

export function createSequence({ start, end, step, switchAfter } = defaultOptions) {
  const seq = [];
  step = step || defaultOptions.step
  for (let i=start; i<=end; i=i+step) {
    seq.push(i);
  }
  
  return switchback(seq, switchAfter);
}
