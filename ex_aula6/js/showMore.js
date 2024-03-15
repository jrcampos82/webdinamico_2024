let open = document.querySelector('article')
let mask = document.querySelector('.mask')
let btn = document.querySelector('button')


function showMore() {

    open.classList.toggle('open')
    if(open.classList.contains('open')) {
        // remove a class mask
        mask.classList.remove('mask')
        btn.innerHTML = "Mostrar menos";
    } else {
        btn.innerHTML = 'Mostrar mais'
        mask.classList.add('mask')
    }
}

// setTimeout(showMore, 3000) // 3 segundos