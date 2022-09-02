console.log('Hello!');

const grid = document.querySelector('.grid');

for (let i = 0; i < 32; i++) {
  const newBox = document.createElement('div');
  newBox.classList.add('grid-layout');
  newBox.setAttribute('id', 'box-' + i);
  grid.append(newBox);
}

class Player {
  constructor(character, left, top) {
    this.character = character;
    this.left = left 
    this.top = top
  }

  createPlayer() {
    const startingBox = document.getElementById('box-0');
    this.character.classList.add('player');
    this.character.setAttribute('player', 1)
    startingBox.append(this.character)


    
  }

  movePlayerRight () {
    this.character.style.left = this.left + 74 + 'px'
  }

  movePlayerLeft () {
    if (this.character.style.left >= 61 )
    this.character.style.left = this.right - 50 + 'px'
  }

  
}

const playerOne = document.createElement('div');


const spawnIn = new Player(playerOne, 61, 7);


spawnIn.createPlayer()

const playerStuff = document.querySelector('[player="1"]')
const computedStyles = playerStuff.getBoundingClientRect()

const upArrow = document.getElementById('up')
const leftArrow = document.getElementById('left')
const downArrow = document.getElementById('down')
const rightArrow = document.getElementById('right')

rightArrow.addEventListener('click', moveRight)

function moveRight(e) {
  spawnIn.movePlayerRight()
}


console.log(computedStyles.left)

console.log(computedStyles.top)






