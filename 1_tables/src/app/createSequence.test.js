import { createSequence } from './createSequence';

test('it returns an array', () => {
  const result = createSequence();
  expect(Array.isArray(result)).toBe(true);
});

test('it creates a switchbacked sequence according to a group size', () => {
  expect(createSequence({ start: 1, end: 15, step: 1, switchAfter: 5 })).toEqual([
    [ 1,2,3,4,5 ],
    [ 10,9,8,7,6 ],
    [ 11, 12, 13, 14, 15]
  ]);

  expect(createSequence({ start: 1, end: 7, step: 1, switchAfter: 3 })).toEqual([
    [ 1,2,3 ],
    [ 6,5,4 ],
    [ 7 ],
  ]);
})

test('sequence can have custom start and end points', () => {
  const args = { start: 3, end: 11, step: 1, switchAfter: 5 };
  expect(createSequence(args)).toEqual([
    [ 3,4,5,6,7 ],
    [ 11,10, 9,8 ]
  ])
})
