
// const parent = document.querySelector(".parent");

// console.log(parent);
// console.log(parent.children[1].innerHTML); 

// for (let i = 0; i<parent.children.length; i++) {
// console.log(parent.children[i].innerHTML);
// }
// parent.children[2].style.color="blue";
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayone=document.querySelector('.day');
// console.log(dayone);

// console.log("NODES:   ", parent.childNodes);

// const div=document.createElement('div');
// div.className="main";
// div.id=Math.round((Math.random()*10)+1);
// div.setAttribute("title","generated title")
// div.style.backgroundColor="yellow"
// div.style.padding="5%"
// div.style.margin="5%"
// const addtext=document.createTextNode("hello Js")
// div.appendChild(addtext)
// document.body.appendChild(div);
// // how to show these content on screen


// *************Section2**************


// function to add List items in UL
function addlanguage(LangName) {
    const li=document.createElement('li')
    li.innerHTML=`${LangName}`
    document.querySelector(".language").appendChild(li)
}
addlanguage("Javascript")
addlanguage("Python")
addlanguage("Typescript")

// optimized approach of the same 
function optimizedLang(LangName){
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(LangName));
    document.querySelector('.language').appendChild(li)    
}
optimizedLang('golang')


// Edit the List items
// selecting the element we want to change
const secondLang=document.querySelector("li:nth-child(2)")
// creating a new listitem which will be placed at vacant location 
const newli=document.createElement("li")
newli.textContent="mojo"
// replacng the old list item with new one 
secondLang.replaceWith(newli)


// 2nd way to edit 
const firstLang=document.querySelector('li:first-child')
firstLang.outerHTML='<li>Typescript</li>'



// How to Remove

// select the reference of that element you want to remove

const removeEle=document.querySelector('li:nth-child(3)')
removeEle.remove()
