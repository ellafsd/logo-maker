const { Square, Triangle, Circle } = require('./shapes.js');

  describe('Shape Classes', () => {
    test('Square renders correctly', () => {
      const square = new Square('Test', '#FFFFFF', '#000000');
      const result = square.renderShape();
      expect(result).toContain('<rect x="50" y="50" width="200" height="100" fill="#000000" />');
      expect(result).toContain('<text x="150" y="125" fill="#FFFFFF" font-size="40" text-anchor="middle" alignment-baseline="middle">Test</text>');
    });
  
    test('Triangle renders correctly', () => {
      const triangle = new Triangle('Test', '#FFFFFF', '#000000');
      const result = triangle.renderShape();
      expect(result).toContain('<polygon points="150,10 290,190 10,190" fill="#000000" />');
      expect(result).toContain('<text x="150" y="125" fill="#FFFFFF" font-size="40" text-anchor="middle" alignment-baseline="middle">Test</text>');
    });
  
    test('Circle renders correctly', () => {
      const circle = new Circle('Test', '#FFFFFF', '#000000');
      const result = circle.renderShape();
      expect(result).toContain('<circle cx="150" cy="100" r="80" fill="#000000" />');
      expect(result).toContain('<text x="150" y="125" fill="#FFFFFF" font-size="40" text-anchor="middle" alignment-baseline="middle">Test</text>');
    });
  });

