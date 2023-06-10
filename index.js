const source = document.querySelector('.drag-source-container');
const target = document.querySelector('.drag-target-container');
const dragHereText = document.querySelector('.drag-here-text');

function drop(event) {
  event.preventDefault();
  // fetch the data of dragged object (id) and append that into child of target
  const draggedObject = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(draggedObject));
}

function dragStart(event) {
  //set the data of the item being dragged
  event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event){
  event.preventDefault();
}