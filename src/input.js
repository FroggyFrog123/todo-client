export function setupInput(input, button, list, counter){
    button.addEventListener('click', function() {
        const li = document.createElement('li');
        // const prefix = document.createElement('strong');
        // prefix.textContent = ' #нужно сделать';
        // li.appendChild(prefix);
        // const text = document.createElement('span');
        // text.textContent = input.value;
        // li.appendChild(text);
        li.innerHTML = `<strong>#нужно сделать:</strong><span>${input.value}</span>`

        // li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
        const count = list.querySelectorAll('li').length;
        counter.textContent = count;
    });
}
