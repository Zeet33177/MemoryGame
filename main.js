const ruleSet=document.getElementById("ruleset")
const cardArray=[
  {
    name:'pikachu',
    img:'/pikachu025.png'
  },
  {
    name:'charmander',
    img:'/charmander004.png'
  },
  {
   name:'bulbasaur',
   img:'/bulbasaur001.png'
  },
  {
    name:'cubone',
    img:'/cubone104.png'
  },
  {
    name:'eevee',
    img:'/eevee133.png'
  },
  {
    name:'mewtwo',
    img:'/mewtwo150.png'
  },
  {
    name: 'pikachu',
    img: '/pikachu025.png'
  },
  {
    name: 'charmander',
    img: '/charmander004.png'
  },
  {
    name: 'bulbasaur',
    img: '/bulbasaur001.png'
  },
  {
    name: 'cubone',
    img: '/cubone104.png'
  },
  {
    name: 'eevee',
    img: '/eevee133.png'
  },
  {
    name: 'mewtwo',
    img: '/mewtwo150.png'
  }
  ]
const cardChosen=[]
const cardChosenId=[]
const resultDisplay=document.getElementById("result")
let score=0;
cardArray.sort(()=>0.5-Math.random())

const gridDisplay=document.querySelector('#grid')

function createBoard(){
  for(let i=0;i<12;i++){
    const card = document.createElement('img')
    card.setAttribute('src','/pokeball.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipCard)
    gridDisplay.append(card)
  }
}
createBoard()
function flipCard(){
  let cardId=this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if(cardChosen.length===2){
      setTimeout(checkMatch,500)
  }
}
function checkMatch(){
  const cards=document.querySelectorAll('#grid img')
  if (cardChosen[0] == cardChosen[1]) {
    cardChosen.pop()
    cardChosenId.pop()
    cardChosen.pop()
    cardChosenId.pop()
    if(score<9){
      score+=2;
      resultDisplay.innerText=score;
    }
    else{
      resultDisplay.innerText="All Pokemons Found !!!"
    }
  }
  else{
    cards[cardChosenId[0]].setAttribute('src','/pokeball.png')
    cards[cardChosenId[1]].setAttribute('src','/pokeball.png')
    cardChosen.pop()
    cardChosenId.pop()
    cardChosen.pop()
    cardChosenId.pop()
  }
}
let showRuleFlag=0;
function showRule(){
  if(showRuleFlag==0){
  showRuleFlag=1;
  ruleSet.style.display="inline";
  }
  else{
    showRuleFlag=0;
    ruleSet.style.display="none";
  }
}