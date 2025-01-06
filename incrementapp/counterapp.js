let co=document.getElementById("idd")
let count = 0;
function counter(){
    count = count + 1;
    co.textContent = count
}

function save(){
    let countersave = document.getElementById("save-el")
    countersave.textContent += count + " - "
    co.textContent = 0
    count = 0
}
