let todoBtn=document.querySelector(".input");
let addBtn=document.querySelector(".button");
let todoContainer=document.querySelector(".todos-container");
let localData=JSON.parse(localStorage.getItem("todo"));
let todo;
let todoList=localData||[];
// if(localData)
//   renderTodoList(todoList);
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param) {
      let number = Math.random() * 16 | 0;
      let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
      return randomNumber.toString(16);
  });
}
addBtn.addEventListener("click",(e)=>
{
  e.preventDefault();  //do not do the default action of form submission 

  // todo=todoBtn.value;
  // console.log(todo);
  // console.log("btn-clicked");
  todo=todoBtn.value;
  if(todo.length>0)
  {
    todoList.push({id:uuid(),todo,isCompleted:false})
  }
  // console.log(todoList);
  // const para=document.createElement('p');
  // para.textContent=todo;
  // todoContainer.appendChild(para);
  // todoContainer.innerHTML+=`<div><input type="checkbox"><label class="todo">${todo}</label> <button>delete</button></div>`
  renderTodoList(todoList);
  localStorage.setItem("todo",JSON.stringify(todoList));
  todoBtn.value="";
}); 
todoContainer.addEventListener('click',(e)=>
{
    // console.log("clicked");
    // let key=e.target.dataset.key;
    // // console.log(todoList);
    // // todoList.key.isCompleted=true;
    // console.log(e.target);
    // console.log(todoList.key);

    let key=e.target.dataset.key;
    let delTodoKey=e.target.dataset.todokey;
    todoList=todoList.map(todo=>todo.id===key?{...todo,isCompleted:!todo.isCompleted}:todo)
    todoList=todoList.filter(todo=>todo.id!==delTodoKey);
    renderTodoList(todoList);
    localStorage.setItem("todo",JSON.stringify(todoList));
    // console.log(todoList);
})
function renderTodoList(todoList)
{
  todoContainer.innerHTML=todoList.map(({id,todo,isCompleted})=>`<div class="todo relative"><input 
  id="item-${id}" type="checkbox" data-key=${id} ${isCompleted?"checked":""}><label class="todo todo-text t-pointer 
  ${isCompleted?"checked-todo":""}" for="item-${id}" data-key="${id}">
  ${todo}</label> <button class="absolute right-0 button cursor"> 
            <span data-todokey=${id} class="del-btn material-icons-outlined">delete</span>
        </button></div>`)
}

 