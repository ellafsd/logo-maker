class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    
    renderText() {
        return `<text x="150" y="125" fill="${this.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
    }
}

class Square extends Shape {
    renderShape() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
                    ${this.renderText()}
                </svg>`;
    }
}

class Triangle extends Shape {
    renderShape() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150,10 290,190 10,190" fill="${this.shapeColor}" />
                    ${this.renderText()}
                </svg>`;
    }
}

class Circle extends Shape {
    renderShape() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                    ${this.renderText()}
                </svg>`;
    }
}

module.exports = { Square, Triangle, Circle };




















// class Shape {
//     constructor(text, textColor, shapeColor) {
//         this.text = text;
//         this.textColor = textColor;
//         this.shapeColor = shapeColor;
//     }

//     renderText() {
//         return `<text x="150" y="125" fill="${this.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
//     }
// }

// class Square extends Shape {
//     renderShape() {
//         return `<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />\n${this.renderText()}`;
//     }
// }

// class Triangle extends Shape {
//     renderShape() {
//         return `<polygon points="150,10 290,190 10,190" fill="${this.shapeColor}" />\n${this.renderText()}`;
//     }
// }

// class Circle extends Shape {
//     renderShape() {
//         return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />\n${this.renderText()}`;
//     }
// }

// module.exports = { Square, Triangle, Circle };
