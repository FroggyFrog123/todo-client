export function setupCounter({ element, initNum, delta } ) {
  let counter = initNum
  const setCounter = (count) => {
    console.log('call setCounter', count);
    counter = count
    element.innerHTML = `count count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + delta))
  setCounter(counter)
} 


export function setupCounters({elements, initNum, delta}) {
  elements.forEach((el, index) => {
    if( index % 2 === 0){
      setupCounter({element: el, initNum, delta })
    }else{
      setupCounter({element: el, initNum, delta: -delta })
    }
  });
}