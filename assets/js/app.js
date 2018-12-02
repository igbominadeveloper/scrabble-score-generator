let word = document.querySelector('.word');
let score = document.querySelector('.score');
let input = document.querySelector('input');
let tiles = document.querySelector('.tiles');
let tile = document.querySelectorAll('.tile');

class Scrabble{
	constructor(){	
		this.a = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
		this.b = ['D', 'G'];
		this.c = ['B', 'C', 'M', 'P'];
		this.d = ['F', 'H', 'V', 'W', 'Y'];
		this.e = ['K'];
		this.f = ['J', 'X'];
		this.g = ['Q', 'Z'];
		this.score = 0;
		this.word = input.value;
		this.alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		this.tiles = [];
	}
	 splitter(){
		return this.word.toUpperCase().split('');
	}

	getPoints(array){
		 array.forEach(character =>{
		 	if(this.alphabets.includes(character.toLowerCase())){
		 	 this.wordTiles(character);
		 	}
		});
		 return this.score;
	}

	 getCharacterWeight(character){
		if(this.a.includes(character)){
			this.score += 1;
			 return 1;
		 } 
		else if(this.b.includes(character)){
			this.score += 2;
			 return 2;
		 } 
		else if(this.c.includes(character)){
			this.score += 3;
			 return 3;
		 } 
		else if(this.d.includes(character)){
			this.score += 4;
			 return 4;
		 } 
		else if(this.e.includes(character)){
			this.score += 5;
			 return 5;
		 } 
		else if(this.f.includes(character)){
			this.score += 8;
			 return 8;
		 } 
		else if(this.g.includes(character)){
			this.score += 10;
			 return 10;
		 } 
	}

	wordTiles(character){
		let score = this.getCharacterWeight(character);
		this.tiles.push({character,score});
		return this.tiles;
	}
}

function bind(event) {
	word.textContent = event.target.value;
}

function generateScore(event){
	event.preventDefault();
	while (tiles.firstChild) {
  	tiles.removeChild(tiles.firstChild);
	}
	let scrabble = new Scrabble();
	scrabble.tiles = [];
	let wordArray = scrabble.splitter();
	let finalScore = scrabble.getPoints(wordArray);
	score.innerHTML = finalScore;
	
	for(tile of scrabble.tiles) {
		let li = document.createElement("li");
		let span = document.createElement("span");
		let small = document.createElement("small");
		li.setAttribute('class','tile');
		let characterNode = document.createTextNode(tile.character);
		let scoreNode = document.createTextNode(tile.score);
		span.appendChild(characterNode);
		small.appendChild(scoreNode);
		li.appendChild(span);
		li.appendChild(small);
		tiles.appendChild(li);
	}
	input.value = '';
}