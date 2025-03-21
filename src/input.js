export function setupInput(input, field){
    input.addEventListener('input', function(event) {
        console.log(event);
        const textValue = event.target.value;
        field.textContent = textValue;
    })
} //