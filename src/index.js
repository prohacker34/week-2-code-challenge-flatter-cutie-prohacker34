// Your code here
let baseUrl ='https://backend-flatter-cuties.vercel.app/characters'

fetch( baseUrl)
.then((res)=>(res.json()
))
.then((characters)=>{
    let characterBar=document.getElementById("character-bar")
    let img=document.getElementById("image")
let newSpan=document.getElementById("vote-count")


    characters.forEach(character => {
    let span=document.createElement('span')
    characterBar.appendChild(span)
     span.textContent= character.name
      newSpan.textContent=character.votes
     span.addEventListener('click',()=>(img.src=character.image

     ))

    });
})
let form=document.getElementById("votes-form")
form.addEventListener('submit',event=>{
    event.preventDefault()
    let votesInput=document.getElementById("votes")
    let voteCount=document.getElementById("vote-count")
    let currentVotes= parseInt(voteCount.textContent )
    let newVotes=currentVotes+parseInt(votesInput.value )
    voteCount.textContent=newVotes
    form.reset()

})
let resetVotesButton=document.getElementById("reset-btn")
resetVotesButton.addEventListener('click',()=>{
const voteCount=document.getElementById("vote-count")
    voteCount.textContent=0})














