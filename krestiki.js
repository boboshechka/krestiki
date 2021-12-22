const boxes = document.getElementById('boxes')
let step = 0;
let result = ''
const modalEndGame = document.getElementById('modal-end-game')
const overlay = document.getElementById('overlay')
const content = document.getElementById('content')
const btnClose = document.getElementById('btn-close')


boxes.addEventListener('click', event => {
    if (event.target.className = 'box') {
        if (step % 2 === 0) {
            event.target.innerHTML = 'X'
        } else {
            event.target.innerHTML = 'O'
        }
        step++;
        check();
    }
})

const check = () => {
    const korobka = document.getElementsByClassName('box');
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (i = 0; i < arr.length; i++) {
        if (
            korobka[arr[i][0]].innerHTML == 'X' && korobka[arr[i][1]].innerHTML == 'X' && korobka[arr[i][2]].innerHTML == 'X' 
        ) {
            result = 'крестики'
            prepareResult(result)
        } else if (
            korobka[arr[i][0]].innerHTML == 'O' && korobka[arr[i][1]].innerHTML == 'O' && korobka[arr[i][2]].innerHTML == 'O'
        ) {
            result = 'нолики'
            prepareResult(result)
        } else if (
            step == 9
        ) {
            result = 'ничья'
            draw(result)
        }
    }
}

const prepareResult = (winner) => {
    content.innerHTML = `Победили ${winner} !`
    modalEndGame.style.display = 'block'
}

const draw = (drawer) => {
    content.innerHTML = `ничья!`
    modalEndGame.style.display = 'block'
}

const closeModal = () => {
    modalEndGame.style.display = 'none'
    location.reload()
}

overlay.addEventListener('click', closeModal)
btnClose.addEventListener('click', closeModal)







// for (let i = 0; i < boxes.length; i++) {
//     boxes.onclick = function(){

//     }
//     console.log (i)
// }
// if (i % 2 == 0) {
//     boxes.
// }