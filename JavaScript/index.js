let count = 0
let text = document.getElementById("value") 
console.log(text)
console.log(count)
function Increment(){
    count =  count + 1
    console.log(count)
    text.innerText = count
}
function Delete(){
    count = 0
    text.innerText = count

}