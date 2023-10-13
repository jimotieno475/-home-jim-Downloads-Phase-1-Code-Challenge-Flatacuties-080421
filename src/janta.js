let animals=[]
let selectedAnimall={}

function fetchData() {
    return fetch('http://localhost:3000/characters')
      .then(res => res.json())
      .then(data => console.log(data));
}     
 
  function characterBarAnimals(){
    let bar=document.getElementById("character-bar");
    console.console.log(bar)  ;
    console.log(animals);
    let str="";
    for(let i=0;i< animals.length;i++){
        let animal=animals[i];
        str= str + <span onclick="displayAnimals('{i}')">${animal.name}</span>
    }
    bar.innerHTML=str; }
 function displayAnimals(id){
    console.log (id)
    let animal=animals[id]
  selectedAnimall=id;
 let characterName = document.getElementById('name');
 let characterVotes = document.getElementById('vote-count');
 let characterImage = document.getElementById('image');

    characterName.innerText=animal.name;
    characterImage.src =animal.image;
    characterVotes.innerText=animal.votes;}

 let  votesForm = document.getElementById("votes-form");
 votesForm.addEventListener("submit",function(e){
    e.preventDefault();
    let VotesImput = document.getElementById('votes');
 let votes=parseInt(VotesImput.value);
    if (!votes) return ;
 let animal=animals[selectedAnimall];
 animal.votes=votes+animal.votes;
 displayAnimals(selectedAnimall);
 VotesImput.value=""
})
 let resetVotesBtn = document.getElementById("reset-btn");

 resetVotesBtn.addEventListener("click",function(){
    //console.log("Reset Btn Clicked");
    let animal=animals[selectedAnimall];
    animal.votes =0;
    displayAnimals(selectedAnimall);
});
