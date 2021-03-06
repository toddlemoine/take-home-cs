const directions = {
  LTR: 'LTR',
  RTL: 'RTL'
};

const defaultOptions = {
  start: 1,
  end: 10,
  step: 1,
  switchAfter: 5,
  direction: directions.LTR
};

function isRTL(direction) {
  return direction === directions.RTL;
}

function isEven(num) {
  return num % 2 === 0;
}

function padRowWithNulls(row, size) {
  while (row.length < size) {
    row.push( null );
  }
  return row;
} 

function switchback(seq, size, direction) {
  const rows = [];
  let curr = 0;
  while (curr < seq.length) {
    const end = curr + size;
    const row = seq.slice(curr, end);
    rows.push(row);
    
    curr = end;
  }
  // Switch every odd row
  const switchedRows = rows.map( (row, index) => {
    if (index === rows.length - 1) {
      padRowWithNulls(row, size);
    }

    if (isRTL(direction)) {
      return isEven(index) ? row.reverse() : row; 
    } else {
      return isEven(index) ? row : row.reverse(); 
    }
  });
  
  return switchedRows.reverse();
}

export function createSequence({ start, end, step, switchAfter, direction } = defaultOptions) {
  const seq = [];
  step = step || defaultOptions.step
  for (let i=start; i<=end; i=i+step) {
    seq.push(i);
  }
  
  return switchback(seq, switchAfter, direction );
}
