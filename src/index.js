// Your code here

fetch('http://localhost:3000/characters' )
.then((res)=>(res.json()
))
.then(data=>(displayCharacters(data))


)
function displayCharacters(characters) {
    let characterBar= document.querySelector("#character-bar")
    characterBar.addEventListener ('mouseover',displayImages)

    characters.forEach(character => {
         let name =`<span>
     ${character.name}
     </span>
    `
    characterBar.innerHTML+= name
})}
function displayImages( characters) { let detailInfo=document.querySelector("#detail-info")


characters.forEach((character)=>{
    let image = `<img src="${character.image}"alt="${character.name}">`
    detailInfo.innerHTML+=image
})

}





fetch('http://localhost:3000/characters/1')
.then((res)=>(res.json()))
.then((data)=>{displayImages(data)})


