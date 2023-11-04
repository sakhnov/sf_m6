document.querySelector('#link').addEventListener('click', function(e) {
    this.textContent = prompt('Введите новый текст ссылки:');
    e.preventDefault();
});