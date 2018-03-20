function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  
  const newRank = document.querySelectorAll("ul.ranked-list li");
  
  for ( let i = 0; i < newRank.length; i++) {
    newRank[i].innerHTML = newRank + i;
  }
  
}

function deepestChild(){
  
  
}