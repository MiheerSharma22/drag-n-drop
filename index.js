const source = document.querySelector('.drag-source-container');
const target = document.querySelector('.drag-target-container');
const dragHereText = document.querySelector('.drag-here-text');

// will be called when user start to drag an object from source container
function dragStart(event) {
  //set the data of the item being dragged
  event.dataTransfer.setData("text/plain", event.target.id);
  event.target.classList.add("drag-effect");
}

// used to prevent default action that is when we drag object over to another container, it will allow dropping the dragged object as we prevent default action
function allowDrop(event){
  event.preventDefault();
}

// when the object is dropped that is when drag is released then we need to fetch the data of the object and append it in the cild list of container
function drop(event) {
  event.preventDefault();
  // fetch the data of dragged object (id) and append that into child of target
  const draggedObject = event.dataTransfer.getData("text/plain");
  document.getElementById(draggedObject).classList.remove("drag-effect");
  event.target.appendChild(document.getElementById(draggedObject));
}