export function setupCounter({ element, initNum, delta } ) {
  let counter = initNum
  function setCounter(newValue) {
    counter = newValue
    // element.innerHTML = `<strong>count is ${counter}</strong>`
    element.innerHTML = `<strong>count is ${counter}</strong>`

  }
  element.addEventListener('click', () => setCounter(counter + delta))
  setCounter(counter)
} 


export function setupCounters({elements, initNum, delta}) {
  elements.forEach((el, index) => {
    if( index % 2 === 0){
      setupCounter({element: el, initNum, delta: delta })
    }else{
      setupCounter({element: el, initNum, delta: -delta })
    }
  });
}