function generateCircle(color, textColor, text) {
    return `<circle cx="150" cy="100" r="50" fill="${color}" />
            <text x="150" y="105" text-anchor="middle" dominant-baseline="middle" font-size="24" fill="${textColor}">${text}</text>`;
  }
  
  function generateTriangle(color, textColor, text) {
    return `<polygon points="100,150 50,50 150,50" fill="${color}" />
            <text x="100" y="70" text-anchor="middle" dominant-baseline="middle" font-size="24" fill="${textColor}">${text}</text>`;
  }
  
  function generateSquare(color, textColor, text) {
    return `<rect x="100" y="50" width="100" height="100" fill="${color}" />
            <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-size="24" fill="${textColor}">${text}</text>`;
  }
  
  module.exports = {
    generateShape: function(shape, color, textColor, text) {
      let svg = '';
  
      switch (shape) {
        case 'circle':
          svg = generateCircle(color, textColor, text);
          break;
        case 'triangle':
          svg = generateTriangle(color, textColor, text);
          break;
        case 'square':
          svg = generateSquare(color, textColor, text);
          break;
        default:
          console.log('Invalid shape specified.');
          return '';
      }
  
      return svg;
    }
  };