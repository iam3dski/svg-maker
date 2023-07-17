const shapes = require('./shapes');

// Circle Tests
test('Generate Circle SVG', () => {
  const svg = shapes.generateShape('circle', 'red');
  expect(svg).toContain('<circle');
  expect(svg).toContain('fill="red"');
});

// Triangle Tests
test('Generate Triangle SVG', () => {
  const svg = shapes.generateShape('triangle', 'blue');
  expect(svg).toContain('<polygon');
  expect(svg).toContain('fill="blue"');
});

// Square Tests
test('Generate Square SVG', () => {
  const svg = shapes.generateShape('square', 'green');
  expect(svg).toContain('<rect');
  expect(svg).toContain('fill="green"');
});

// Invalid Shape Test
test('Generate Invalid Shape SVG', () => {
  const svg = shapes.generateShape('invalid', 'yellow');
  expect(svg).toBe('');
});