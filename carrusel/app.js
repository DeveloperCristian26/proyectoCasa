// ¿Cuál es la opción que sirve?

//const panels = document.querySelectorAll('.panel')
// Este selecciona todos los elementos con la clase  panel y los guarda en la constante panels

//const panels = document.querySelector('.panel')
//Este solo selecciona el primer elemento que encuentre con la clase panel

//const panels = document.getElementById('panel')
//Rrtorna el primer elemento con el ID especificado en estee caso panel

//const panels = document.getElementsByClassName('.panel')
//Este selecciona todos los elementos con la clase  panel y los guarda en la constante panels

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    console.log(`hola ${panel}`)
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
        

    })

})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}