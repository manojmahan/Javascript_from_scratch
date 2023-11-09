let count=0
function increment(){
    count +=1
    document.getElementById("count-el").innerText=count
}
let saveEl = document.getElementById('save-el')
function save(){
    saveEl.textContent += count +" - "
    
}

