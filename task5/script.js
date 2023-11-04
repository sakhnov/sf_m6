let inputText = document.querySelector('input');
let dublicateText = document.querySelector('#duplicateField');

inputText.addEventListener('keypress', function(){
    dublicateText.textContent = dublicateText.textContent + String.fromCharCode(event.charCode);
});
 
document.querySelector('button').addEventListener('click', function(e){
    console.log(dublicateText.textContent);
    inputText.value = null;
    dublicateText.textContent = null;
    e.preventDefault();
});
