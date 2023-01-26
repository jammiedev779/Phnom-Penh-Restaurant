const numbers_class = [".num0", ".num1",".num2",".num3",".num4",".num5",".num6",".num7",".num8",".num9"]
const operations_class = [".add",".minus",".multiply",".divide"]
const configs_class = [".history",".CE",".C",".dot",".equal" , ".delete"]

let curr_number = ""
let prev_number = ""
let curr_input = document.querySelector(".curr-input")
let prev_input = document.querySelector(".prev-input")
let operator
//number buttons
const numbers = []
for(let i=0 ; i<numbers_class.length ; i++){
    numbers_class[i] = document.querySelector(numbers_class[i])
}
for(let i=0 ; i<numbers_class.length ; i++){
    numbers[i] = numbers_class[i].addEventListener("click",function(){
        onclick(numbers_class[i])
    })
}


// Arithmetic operations
const operations = []
for(let i=0 ; i<operations_class.length ; i++){
    operations_class[i] = document.querySelector(operations_class[i])
}
for(let i=0 ; i<operations_class.length ; i++){
    operations[i] = operations_class[i].addEventListener("click",function(){
        prev_number = curr_input.innerHTML
        onclick(operations_class[i])
        operator = i
        prev_input.innerHTML = curr_input.innerHTML
        document.querySelector("iconify-icon").style.fontSize = "1rem"
        curr_input.innerHTML = "0"
    })
}

//"history","CE","C","X",".","=" button
const configs = []
for(let i=0 ; i<configs_class.length ; i++){
    configs_class[i] = document.querySelector(configs_class[i])
}

// history button
configs_class[0].addEventListener("click",()=>{
    console.log("d")
    document.querySelector(".history-page").style.display = ""
})

//for "." function
configs_class[3].addEventListener("click",function(){
    if(!document.querySelector(".dot").classList.contains("ristricted")){
        document.querySelector(".dot").classList.add("ristricted")
        onclick(configs_class[3])
    }
})

//for "CE" & "C" function
for(let i=1 ; i<=2 ; i++){
    configs_class[i].addEventListener("click",function(){
        curr_input.innerHTML = "0"
        prev_input.innerHTML = ""
        document.querySelector(".dot").classList.remove("ristricted")
    })
}

// "=" function
configs_class[4].addEventListener("click",()=> {
    curr_number = curr_input.innerHTML
    prev_input.innerHTML += curr_input.innerHTML + "="

    if(operator == 0) curr_input.innerHTML = add()
    else if(operator == 1) curr_input.innerHTML = subtract()
    else if(operator == 2) curr_input.innerHTML = multiply()
    else curr_input.innerHTML = divide()
})
// "X" or delete button
configs_class[5].addEventListener("click",()=>{
    if(curr_input.innerHTML.length > 1){
        curr_input.innerHTML = curr_input.innerHTML.substring(0,curr_input.innerHTML.length-1)
    }
    else {
        curr_input.innerHTML = "0"
    }
    
})

function onclick(element){
        if(curr_input.innerHTML == "0" && element.innerHTML != "."){
            curr_input.innerHTML = element.innerHTML
        }
        else if(curr_input.innerHTML.length != 15){
            curr_input.innerHTML += element.innerHTML
        }
}

function add(){
    return Number(prev_number) + Number(curr_number)
}
function subtract(){
    return Number(prev_number) - Number(curr_number)
}
function multiply(){
    return Number(prev_number) * Number(curr_number)
}
function divide(){
    return Number(prev_number) / Number(curr_number)
}




