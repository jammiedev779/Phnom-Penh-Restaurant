const numbers_class = [".num0", ".num1",".num2",".num3",".num4",".num5",".num6",".num7",".num8",".num9"]
const operations_class = [".add",".minus",".multiply",".divide"]
const configs_class = [".config1",".config2",".dot",".config3",".config4",".equal"]

let input = document.querySelector(".input")
let inputString = []
let buffer = ""
//number buttons
const numbers = []
for(let i=0 ; i<numbers_class.length ; i++){
    numbers_class[i] = document.querySelector(numbers_class[i])
}
for(let i=0 ; i<numbers_class.length ; i++){
    numbers[i] = numbers_class[i].addEventListener("click",function(){
        onclick(numbers_class[i])
        buffer += numbers_class[i].innerHTML
        console.log(buffer)
        
        document.querySelector(".operation").classList.remove("ristricted")
    })
    inputString[inputString.length] = buffer
    console.log("input " + inputString)
}


// Arithmetic operations
const operations = []
for(let i=0 ; i<operations_class.length ; i++){
    operations_class[i] = document.querySelector(operations_class[i])
}
for(let i=0 ; i<operations_class.length ; i++){
    operations[i] = operations_class[i].addEventListener("click",function(){
        if(!document.querySelector(".operation").classList.contains("ristricted")){
            document.querySelector(".operation").classList.add("ristricted")
            document.querySelector(".dot").classList.remove("ristricted")
            onclick(operations_class[i])
            
        }
    })
}

// "(",")","CE","X",".","=" button
const configs = []
for(let i=0 ; i<configs_class.length ; i++){
    configs_class[i] = document.querySelector(configs_class[i])
}

// for "(" & ")" function
for(let i=0 ; i<2 ; i++){
    configs[i] = configs_class[i].addEventListener("click",function(){
        if(i == 0){
            if(document.querySelector(".operation").classList.contains("ristricted") || input.innerHTML.length == 0){
                if(!document.querySelector(".config1").classList.contains("ristricted")){
                    document.querySelector(".config1").classList.add("ristricted")
                    onclick(configs_class[i])
                }
            }
        }
        else{
            if(document.querySelector(".config1").classList.contains("ristricted")){
                let detectBranket = input.innerHTML.split("(")
                if(detectBranket[1].length > 0 && !document.querySelector(".operation").classList.contains("ristricted")){
                    //document.querySelector(".config2").classList.add("ristricted")
                    document.querySelector(".config1").classList.remove("ristricted")
                    onclick(configs_class[i])
                }
            }
        }
    })
}

//for "." function
configs_class[2].addEventListener("click",function(){
    if(!document.querySelector(".dot").classList.contains("ristricted")){
        document.querySelector(".dot").classList.add("ristricted")
        onclick(configs_class[2])
    }
})

//for "CE" function
configs_class[3].addEventListener("click",function(){
    input.innerHTML = "0"
    document.querySelector(".dot").classList.remove("ristricted")
    document.querySelector(".config1").classList.remove("ristricted")
    document.querySelector(".operation").classList.remove("ristricted")
})

let arr = []
let a = "a"
let b = "b"
arr.push(a)
arr.pop()
arr.push(b)
console.log(arr)


function onclick(element){
        if(input.innerHTML == "0"){
            input.innerHTML = element.innerHTML
        }
        else if(input.innerHTML.length != 15){
            input.innerHTML = input.innerHTML.concat(element.innerHTML)
           // console.log(input.innerHTML.length)
        }
}




