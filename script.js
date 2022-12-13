let list = document.querySelector('.list');
let item = document.querySelectorAll('.item');
let btn = document.querySelector('.btn');
let input = document.querySelector('.input');
let closeBtn = document.querySelectorAll('.btn-close');

input.addEventListener('keyup', function() {
  if (input.value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
})

btn.addEventListener('click', function (ev) {
  let inputValue = input.value;
  let newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = inputValue;


    let newBtnClose = document.createElement('button');
    newBtnClose.classList.add('btn-close');
    newBtnClose.textContent = "X"
  

  if (newItem.textContent === "") {
    // alert('Ничего не введено');
  } else {
    list.appendChild(newItem);
    input.value = "";
    btn.disabled = true;
    newItem.appendChild(newBtnClose);
  }
})

list.addEventListener('click', function(ev) {
  if(ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
})

list.onclick = function(del) {
  const btnClose = del.target.closest('.btn-close');
  if (!btnClose) {
    return;
  }
  btnClose.parentElement.remove();
}