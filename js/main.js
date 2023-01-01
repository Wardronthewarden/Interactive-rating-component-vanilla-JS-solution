let response;

const submitBtn = document.querySelector(".responseCard__submit");
const responseSelections = document.querySelectorAll(".responseCard__selection");
const ratingCard = document.querySelector(".response")
const thankYouCard = document.querySelector(".thankYou")
const selectionConfirm = document.querySelector(".thankYou__Confirmation")


submitBtn.addEventListener('click', submitSelection)

responseSelections.forEach(element => element.addEventListener('click', changeSelection));


function changeSelection(event){
    response = event.target.innerHTML
    console.log(response)
    responseSelections.forEach(btn => {btn.classList.remove('activeSelection')});
    event.target.classList.add('activeSelection')
}

function submitSelection (event){
    if(response!==undefined){
    ratingCard.classList.add('hidden')
    thankYouCard.classList.toggle('hidden')
    selectionConfirm.innerHTML = `You selected ${response} out of 5`}else{
        alert("Please select a rating!")
    }

}