import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter, setupCounters } from './counter.js'
import { setupInput } from './input.js'

function sayHi(name, timestamp) {
  const strToConsole = `Hi, ${name}. Date now is ${timestamp}`;
  console.log(strToConsole);
}
sayHi('konstantin arbuzov', new Date(Date.now()));

document.querySelector('#app').innerHTML = `
  <div>
  <button>aboba</button>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h2>Hello Vite!</h2>
    <div class="card">
      <button id="incremental-counter" type="button">aboba</button>
      <button id="decremental-counter" type="button"></button>
      <button id="cremental-counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <h3 id="todo-counter">0</h3>
    <input id="input" type="text" value="init" />
    <button id="save">Save</button>
    <ul id="list" />
  </div>
`

setupCounters({ elements: document.querySelectorAll('.card button'), initNum: 5, delta: 2 })
setupInput(document.querySelector('#input'), document.querySelector('#save'), document.querySelector('#list'), document.querySelector('#todo-counter'))