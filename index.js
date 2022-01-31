let vowels=['a','e','i','o','u']
const inputBtn = document.getElementById("btn")

let result = document.getElementById("result")
let counter = 0 

inputBtn.addEventListener("click" ,coVowels)


function coVowels(){
    console.log(":sd")
    let word=document.getElementById("input").value  
    for (w of word){
        for (v of vowels){
            if(w==v){
                counter++
            }
        }
    }


alert(`${counter}`)
}


