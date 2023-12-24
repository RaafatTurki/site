let w = 25
let dots = []
let rows
let cols

const body = document.querySelector('body')

class Dot {
  constructor(x, y) {
    this.pos = createVector(x + (w/2), y + (w/2))
    this.r = 0
    this.min_r = 0
    this.max_r = (w/3) * 2
    this.a = 100
    this.min_a = 0
    this.max_a = 255
  }

  render() {
    if (dist(this.pos.x, this.pos.y, mouseX, mouseY) < 100) {
      this.r = constrain(this.r + 3, this.min_r, this.max_r)
      this.a = constrain(this.a + 30, this.min_a, this.max_a)
    } else {
      this.r = constrain(this.r - 1, this.min_r, this.max_r)
      this.a = constrain(this.a - 3, this.min_a, this.max_a)
    }

    fill(255, 255, 255, this.a)
    ellipse(this.pos.x, this.pos.y, this.r)
  }
}

function init_dots() {
  rows = height / w
  cols = width / w
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if ((i + j) % 2 == 0) {
        dots.push(new Dot(i * w, j * w))
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  init_dots()

  const resize_observer = new ResizeObserver(() => {
    dots = []
    resizeCanvas(windowWidth, windowHeight)
    init_dots()
  })

  resize_observer.observe(body)
}

function draw() {
  background("black")
  noStroke()

  for (let i = 0; i < dots.length; i++) {
    dots[i].render()
  }
}

// function windowResized() {
//   // resizeCanvas(windowWidth, windowHeight)
//     dots = []
//     resizeCanvas(windowWidth, windowHeight)
//     init_dots()
// }
