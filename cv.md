# Donskih Valeria
## My Contacts Info:
* Phone: +375 (44) 542-41-97
* E-mail: lottya2016@gmail.com
* GitHub: Valeria Donskih [@Lottya](https://github.com/lottya/)
* Telegram: [Valeria Donskih](https://t.me/valeridondon)
<hr>

## About Me

I'm 19 years old. At the moment I work as an SEO specialist in an IT agency WEB-sphere, but I'm interested in developing in the direction of front-end development.

My goal is to improve my skills and learn new things, gain valuable experience.

My strengths: 

* Purposefulness
* Responsibility
* Diligence
* I quickly understand the essence of the problem, I begin to come up with solutions

<hr>

## My Skills 

* HTML
* CSS (Bootstrap, Preprocessor SCSS/SASS, BEM methodology).
* JavaScript
* JSON-LD (JavaScript Object Notation for Linked Data) 
* Gulp (gulp.js)
* Layout of HTML-letters
* Figma (for web development)
* GitLab/GitHub

<hr>

## Code Examples

An example of to do list with the ability to add new tasks and delete them

JS script first, then HTML markup:

```
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

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="app.js" defer></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #999;
      font-family: Verdana, Tahoma, sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: #010101;
    }

    input:focus,
    button:focus {
      outline: none;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 50px;
    }

    .done {
      text-decoration: line-through;
    }

    .item {
      width: fit-content;
    }

    .item.done {
      color: #666;
    }

    .btn-close {
      background-color: transparent;
      border: none;
      font-weight: 600;
    }

    .box {
      display: flex;
    }

    .input {
      margin-right: 10px;
      height: 20px;
      border: none;
      font-family: Verdana, Tahoma, sans-serif;
      transition: opacity .2s ease-in;
    }

    .input:hover {
      opacity: .7;
    }

    .input::placeholder {
      color: #010101;
      font-size: 14px;
    }

    .btn {
      border: none;
      color: #010101;
      font-family: Verdana, Tahoma, sans-serif;
      font-size: 14px;
      transition: outline .2s ease-in, opacity .2s ease-in;
    }

    .btn:hover {
      outline: 1px solid #010101;
      opacity: .5;
    }

    .btn:disabled {
      color: #888;
      pointer-events: none;
    }
  </style>
  <title>homework 9</title>
</head>
<body>
  <div class="container">
    <h1 class="title">Homework 9</h1>
    <h2 class="list-title">Список задач</h2>
    <ol class="list">
      <li class="item">Задача №1
        <button class="btn-close">X</button>
      </li>
      <li class="item">Задача №2
        <button class="btn-close">X</button>
      </li>
      <li class="item">Задача №3
        <button class="btn-close">X</button>
      </li>
    </ol>
    <div class="box">
      <input type="text" class="input" placeholder="Введите следующую задачу">
      <button class="btn" disabled>Добавить</button>
    </div>
  </div>
</body>
</html> 

```
<hr>

## Work Experience

Now my specialty is SEO (Search Engine Optimizer). In the process of working with sites, there are tasks related to the layout of pages or their refinement.

I can work in such SMCs as: 
* Bitrix
* WP (wordpress)
* MODx

I am attaching a link to the code of my graduation project "[Blanchard](https://github.com/lottya/blanchard)" on GitHub

<hr>

## Education

**Public Education**

* State educational institution "Secondary school No. 76 of Minsk"

* Junior Sister of Mercy (4 ranks)

**Skillbox**

I mastered the knowledge of HTML markup of a document, CSS styles and styles for adaptive layout of the page for mobile devices, basic JS skills (hang a "click" event processing on an element, dynamically change the content of an HTML element, etc.)


I acquired the basic knowledge and skills related to layout in online courses from the Skill Box platform "[Web developer from scratch to PRO](https://skillbox.ru/course/webdev/)".

<hr>

## Languages

* Russian - native speaker.
* English - A2 