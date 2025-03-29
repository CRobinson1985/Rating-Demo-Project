'use strict';
const option1 = document.getElementById('rating1');
const option2 = document.getElementById('rating2');
const option3 = document.getElementById('rating3');
const option4 = document.getElementById('rating4');
const option5 = document.getElementById('rating5');
const mainBox = document.getElementById('main-box');
const thankYouBox = document.getElementById('thank-you-box');
const submitBtn =  document.getElementById('submit-button');
const backdrop = document.getElementById('backdrop');
const errorOkayBtn = document.getElementById('error-ok-button');
const errorDiv = document.getElementById('error-div');

// let ratingSelection = '';
// let option = 0;
let selected = false;

function ratingSelect(option) {
  selected = !selected;
  document.getElementById('rating-text').innerText = `You selected ${option.target.innerText} of 5`;

}

function toggleButton(btn) {
  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected"); // Deselect if already selected
  } else {
    document.querySelectorAll('.btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add("selected"); // Select the clicked button
  }
}

function submitFunc() {
  if (selected){
    mainBox.style.display = "none";
    thankYouBox.style.display = "block";
  } else {
    backdrop.style.display = 'block';
    errorDiv.style.display = 'block';
  }
}
function toggleBackdrop() {
  if (backdrop.style.display == 'none') {
    backdrop.style.display = 'block';  
  } else {
    backdrop.style.display = 'none';
    errorDiv.style.display = 'none';
  } 
}

function errorOkayHandler() {
  if (errorDiv.style.display === 'block') {
    errorDiv.style.display = 'none';
    toggleBackdrop();
  }
}

option1.addEventListener('click', ratingSelect);
option2.addEventListener('click', ratingSelect);
option3.addEventListener('click', ratingSelect);
option4.addEventListener('click', ratingSelect);
option5.addEventListener('click', ratingSelect);
submitBtn.addEventListener('click', submitFunc);
backdrop.addEventListener('click', toggleBackdrop);
errorOkayBtn.addEventListener('click', errorOkayHandler)