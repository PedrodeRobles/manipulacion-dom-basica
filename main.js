// const h1 = document.querySelector('h1');
// const parrafo = document.querySelector('p');
// const parrafoClass = document.querySelector('.parrafoClass');
// const parrafoId = document.querySelector('#parrafoId');
// const input = document.querySelector('input');

// console.log({
//     h1,
//     parrafo,
//     parrafoClass,
//     parrafoId,
//     input
// });

// h1.innerHTML = "Otro titulo";
// console.log(h1.getAttribute('pantalla'));
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'amarillo');
// console.log(h1.getAttribute('class'));


// h1.classList.add('Marron')
// console.log(h1.getAttribute('class'));
// h1.classList.remove('amarillo')
// console.log(h1.getAttribute('class'));

// input.value = 999;
// console.log(input.value);

// const img = document.createElement('img');
// img.setAttribute('src', 'https://i.pinimg.com/564x/ec/b3/80/ecb38046fb84c7ca4a9ec9f3a57e5c88.jpg')

// parrafoId.append(img);

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');
const form = document.querySelector('#form');

// btn.addEventListener('click', btnOnClick);

// function btnOnClick() {
//     let total = input1.value + input2.value;
//     console.log(total);

//     pResultado.innerHTML = "El resultado es: " + total;
// }

form.addEventListener('submit', sumarInput);

function sumarInput() {
    event.preventDefault();
    let total = input1.value + input2.value;
    console.log(total);

    pResultado.innerHTML = "El resultado es: " + total;
}