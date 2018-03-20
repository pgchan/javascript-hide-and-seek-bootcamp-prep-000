function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("nested");
}

function increaseRankBy(n){
  const lis = document.querySelectorAll("ul.ranked-list li");
  for ( let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}


function deepestChild(){
  var divs = document.querySelectorAll("#grand-node");
  var items = divs[0].querySelectorAll('div');
  return items[items.length-1];
}