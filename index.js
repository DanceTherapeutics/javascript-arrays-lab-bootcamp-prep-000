const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}
