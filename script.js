// Get all the draggable boxes
const boxes = document.querySelectorAll('.box');

let sourceBox = null; // Store the source box during dragging
let previousContent=null;
let currentContent=null;

// Add event listeners for drag events
boxes.forEach(box => {
  box.addEventListener('dragstart', dragStart);
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
  box.addEventListener('dragend', dragEnd);

});
undoButton.addEventListener("click", undoAction);
function undoAction(e) {
    this.innerHTML = sourceBox.innerHTML;
   e.previousContent
   console.log("current"+this.innerHTML+" "+e.currentContent);

  }

// Event handlers for drag events
function dragStart(e) {
  sourceBox = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html',
  this.innerHTML);
  this.classList.add('fade');
  }
  
  function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  }
  
  function dragEnter(e) {
  e.preventDefault();
  this.classList.add('over');
  }
  
  function dragLeave() {
  this.classList.remove('over');
  }
  
  function dragDrop(e) {
  if (sourceBox !== this) {
  sourceBox.innerHTML = this.innerHTML;
  this.innerHTML = e.dataTransfer.getData('text/html');
  }
  this.classList.remove('over');
  }
  
  function dragEnd() {
  this.classList.remove('fade');
  }