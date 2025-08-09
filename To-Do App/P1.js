let input = document.querySelector('input');
let btn = document.querySelector("button");
let ul = document.querySelector('ul');


btn.addEventListener('click',function(){
    let item = input.value;
    let li = document.createElement('li');
    li.innerText=item;
    ul.append(li);


    let delbtn = document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
});




// let delbttn = document.querySelectorAll(".delete");
// for(delbtn of delbttn){
//     delbtn.addEventListener('click',function(){
//         console.log("delete");
//     })
// }