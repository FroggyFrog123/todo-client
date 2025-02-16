import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter, setupCounters } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h2>Hello Vite!</h2>
    <div class="card">
      <button id="incremental-counter" type="button"></button>
      <button id="decremental-counter" type="button"></button>
      <button id="cremental-counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

// setupIncrementalCounter(nt.querySelector('.read-the-docs'))
// setupCounterForH1();



// setupCounter({ element: document.querySelector('#decremental-counter'), initNum: 5, delta: -10})
// setupCounter(document.querySelector('#incremental-counter'), 90, 10)
// setupCounter(document.querySelector('.read-the-docs'), 0, 10);

// const card = document.getElementsByClassName("button");
// console.log(card)
// setupCounters(card.querySelectorAll('button'))
setupCounters({ elements: document.querySelectorAll('.card button'), initNum: 5, delta: 2 })
