
// const h1 = document.querySelector('h1');
// const p = document.querySelector('p'); 
// const parrafito = document.getElementsByClassName('.parrafito');
// const pid = document.getElementById('pid'); 
// const input = document.querySelector('input');  

// console.log(h1)


//  h1.innerHTML = "Parrafo <br> texto" //forma de cambiar desde innerHTML
//  h1.innerText = "Parrafo texto" // forma de cambiar desde innerText
// h1.classList.add('verde') // se agrega una clase al H1
// h1.classList.remove('verde') // borra la clase al H1

// input.value = 'Escribe' // cambiar el valor del input
// console.log(document.createElement('img')) // para agregar un atributo img  o cualquier otro atributo al html
// const img = document.createElement('img'); // crear una variable img  para manipular el HTML
// img.setAttribute('src', 'agregar_url'); // se agrega a la img una src con url de la imagen

// pid.innerHTML= ' '; // se usa para borrar lo que contiene ese id en este caso pid
// pid.append(img); // insertar la img en la id en este caso pid


const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const sumaInputs = Number(input1.value) + parseInt(input2.value); // se usa number o parseInt para sumar el valor del input

    pResult.innerText = "Resultado: " + sumaInputs;

}




//OTRA FORMA se debe sacar el type del buttom HTML
// form.addEventListener('submit', btnOnClick);

// function btnOnClick(event) {  
//     event.preventDefault(); // se usa event para mostrar el resultado desde submit

//     //suma de valor de inputs. mostrando el resultado con p innertext                                      
//     const sumaInputs = Number(input1.value) + parseInt(input2.value); // se usa number o parseInt para sumar el valor del input
//     pResult.innerText = "Resultado: " + sumaInputs;    
// }