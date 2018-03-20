function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  
  const newRank = document.getElementById("ranked-list")
  
  return document.querySelector(".ranked-list") + n;
}

function deepestChild(){
  
  
}