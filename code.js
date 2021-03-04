function changeFont(input) {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerText = input.value;
    if (h1.innerHTML == 0) {
        h1.innerHTML = "Change Font";
    }
}
function clearField() {
    let btnClear = document.querySelector('img');
    let inputs = document.querySelectorAll('input');

    btnClear.addEventListener('click', () => {
        inputs.forEach(input => input.value = '');

        let h1 = document.getElementsByTagName("h1")[0];
        h1.innerText = "Change Font";
    });
}