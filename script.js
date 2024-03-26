show = (any)=> {
    document.querySelector('#input').value = any;
}

let dropdown = document.querySelector('.dropdown');

dropdown.onclick = function(){
    dropdown.classList.toggle('active')
};