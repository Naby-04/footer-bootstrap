const code = document.querySelector('.code')

const contenu = document.querySelector('.content')

const button = document.querySelector('#recuperer')

const buttonRetour =document.querySelector('#retour')

button.addEventListener('click',()=>{
    contenu.style.display= "none"

    code.style.display = 'block'
})

buttonRetour.addEventListener('click',()=>{{
    
    code.style.display = 'none'
    contenu.style.display= "block"
}})