function bellRiddle(){
  alert("Type the answer exactly, all lower case, no punctuation. Leave out \"Answer:\"");
  var answer = prompt("Why is an orange like a bell? Because they both must be ...");
  if (answer == "peeled" ||  answer == "pealed") alert("Correct!");
  else alert("Watch the video, reload, and try again.");
}