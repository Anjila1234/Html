//tagename

let a1 = document.querySelector('h1')
console.log(a1)


//id
let a2  = document.querySelector('#five')
console.log(a2)


//class
let a3 = document.querySelector('.QA')
console.log(a3)


//name- attributes
let a4 = document.querySelector('h1[name = "ANjila"]')
console.log(a4)


//tagname
let b1 = document.querySelector('h2')
console.log(b1)

//id

let b2 = document.querySelector('#six')
console.log(b2)

//class 
let b3 = document.querySelector('.javascript')
console.log(b3)

//attributes 
let b4 = document.querySelector('h2[name ="Bhagwati"]')
console.log(b4)


a1.addEventListener ('mouseover',function(){
    a1.style.color = "red";
    a1.style.backgroundColor = "yellow";
    a1.textContent = "sampada";
}
)





b1.addEventListener('mouseover', function(){
    b1.style.color = "pink";
    b1.style.backgroundColor = "red";
    b1.textContent = "Anjila";
})



























