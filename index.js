const form = document.querySelector("form-task");

const deleteInput = document.querySelector(".delete-input");

const addButton = document.querySelector(".add");

const card = document.querySelector(".card");

const input = document.querySelector("#text");

const ul = document.querySelector(".task-list");

const iconSort=document.querySelector(".fa-arrow-up-wide-short")


deleteInput.addEventListener("click", (event) => {
 event.preventDefault();
input.value = "";
});
let newArray=[];
addButton.addEventListener("click",(e)=>{
 
e.preventDefault();
const task= input.value;
if(task.length==0){
  alert("Please fill out the task.")
}

const div=document.createElement("div");
div.classList.add("list");
ul.appendChild(div);
const li=document.createElement("li")
li.innerHTML=task;
div.appendChild(li)
const deleteBtn=document.createElement("button")
deleteBtn.classList.add("delete");
deleteBtn.innerHTML=`x`;
div.appendChild(deleteBtn)
 ul.style.display="block"
newArray.push(div)
input.value=''


console.log(newArray)

deleteBtn.addEventListener("click",(event)=>{

  console.log((event.target.previousElementSibling.textContent))
   let index= newArray.indexOf(event.target.previousElementSibling.textContent)
   newArray.splice(index,1)
   event.target.parentElement.remove();
   if(ul.children.length==0){
    ul.style.display="none"
   }
})

let sortArr=[];
iconSort.addEventListener("click",()=>{
   const list =document.querySelectorAll("li")
   
 list.forEach(item=>{
    sortArr.push(item.textContent)
  })
 let newArr= sortArr.sort();
newArr.forEach(item=>{
 
})

})


});













  
  

