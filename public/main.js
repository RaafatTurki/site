let w = 30
let dots = []
let rows
let cols

class Dot {
    constructor(x, y) {
        this.pos = createVector(x + (w/2), y + (w/2))
        this.r = 0
        this.min_r = 0 
        this.max_r = (w/3) * 2
        this.col = 'white'
    }
    
    render() {
        if (dist(this.pos.x, this.pos.y, mouseX, mouseY) < 100) {
            // this.col = 'red'
            this.r = constrain(this.r + 3, this.min_r, this.max_r)
        // //     offset = 50
        } else {
            this.r = constrain(this.r - 1, this.min_r, this.max_r)
            // this.col = 'white'
        // //     offset = 0
        }

        fill(this.col)
        ellipse(this.pos.x, this.pos.y, this.r)
    }
}

function init_dots() {
    rows = height / w
    cols = width / w
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            dots.push(new Dot(i * w, j * w))
        }
    }
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    init_dots()
}

function draw() {
	background("black");
	noStroke();

    for (let i = 0; i < dots.length; i++) {
        dots[i].render()
    }
}

function windowResized() {
  // resizeCanvas(windowWidth, windowHeight);
    dots = []
    resizeCanvas(windowWidth, windowHeight);
    init_dots()
}
