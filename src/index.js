// Your code here
let baseUrl ='https://backend-flatter-cuties.vercel.app/characters'

fetch( baseUrl)
.then((res)=>(res.json()
))
.then((characters)=>{
    let characterBar=document.getElementById("character-bar")
    let img=document.getElementById("image")


    characters.forEach(character => {
    let span=document.createElement('span')
    characterBar.appendChild(span)
     span.textContent= character.name

     span.addEventListener('click',()=>(img.src=character.image



     ))

    });
})
let form=getElementById('')












