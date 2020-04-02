import { createSequence } from './createSequence';

test('it returns an array', () => {
  const result = createSequence();
  expect(Array.isArray(result)).toBe(true);
});

test('it creates a switchbacked sequence according to a group size', () => {
  expect(createSequence({ start: 1, end: 15, step: 1, switchAfter: 5 })).toEqual([
    [ 11, 12, 13, 14, 15],
    [ 10,9,8,7,6 ],
    [ 1,2,3,4,5 ],
  ]);

  expect(createSequence({ start: 1, end: 9, step: 1, switchAfter: 3 })).toEqual([
    [ 7,8,9 ],
    [ 6,5,4 ],
    [ 1,2,3 ],
  ]);
})

test('sequence can have custom start and end points', () => {
  const args = { start: 3, end: 12, step: 1, switchAfter: 5 };
  expect(createSequence(args)).toEqual([
    [ 12, 11,10, 9,8 ],
    [ 3,4,5,6,7 ],
  ])
})

test('sequence has null values to ensure equal group sizes', () => {
  const args = { start: 3, end: 11, step: 1, switchAfter: 5 };
  expect(createSequence(args)).toEqual([
    [ null, 11, 10, 9,8 ],
    [ 3,4,5,6,7 ],
  ])
})

test('can specify what direction to run the switchback', () => {
  const args = { start: 3, end: 11, step: 1, switchAfter: 5, direction: 'RTL' };
  expect(createSequence(args)).toEqual([
    [ 8, 9, 10, 11, null ],
    [ 7, 6, 5, 4,3 ],
  ])
})
