// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Gift){
    cats.push(Gift);
}
function destructivelyPrependCat(Charles){
    cats.unshift(Charles);
}
console.log(cats);

function destructivelyRemoveLastCat(){
    cats.pop();
}

function appendCat(Peter) {
    return [...cats, Peter];
  }
  function destructivelyRemoveFirstCat(){
    cats.shift();
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
  function prependCat(Ritchie) {
    return [Ritchie, ...cats];
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  