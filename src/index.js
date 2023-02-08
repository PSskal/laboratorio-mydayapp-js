// import "./css/base.css";
console.log("hola manitos seguimos bien jajajaj");

const section = document.querySelector(".todoapp");
const header = document.querySelector(".header");
const headerContainer = document.querySelector(".container");

const allContainer = document.querySelector(".container todoapp-wrapper");
const todosSection = document.querySelector(".main");
const todoList = document.querySelector(".todo-list");

const fotter = document.querySelector(".fotter");
const todoCount = document.querySelector(".todo-count");
const clearButton = document.querySelector(".clear-completed");
const filters = document.querySelector(".filters");

// header
const h1 = document.createElement("h1");
h1.textContent = "my day app";
const p = document.createElement("p");
p.textContent = "all my task in one plasces in";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.classList.add("new-todo");
// input.setAttribute("class", "new-todo");
input.setAttribute("placeholder", "type new todos");
input.setAttribute("autofocus", "");

headerContainer.appendChild(h1);
headerContainer.appendChild(p);
headerContainer.appendChild(input);

const todos = []


const addTask = (e) => {
    
    if (e.key === "Enter") {
        todos.push({todoName:`${e.target.value}`, state:null})
        console.log(e.target.value)
        e.target.value = "";
        console.log(todos) 
        todoListRender(todos)
  }
}

const completedAdd = (e) => {
        const atribute = e.srcElement.nextElementSibling
        atribute.getAttribute("innerHTML")
        const finTodo = atribute.innerText;
        const lucasc =todos.find((element)=> element.todoName === finTodo); 
     (e.target.checked) ?lucasc.state = "completed" : lucasc.state=null;
    todoListRender(todos)

    
}
const deleteTask = (e) => {
    const atribute = e.srcElement.previousElementSibling
    atribute.getAttribute("innerHTML")
    const finTodo = atribute.innerText;
    console.log(e.srcElement.previousElementSibling);
    const lucasc =todos.findIndex((element)=> element.todoName === finTodo);
    todos.splice(lucasc, 1);
    todoListRender(todos)
    console.log(todos);
}
const editingTask = (e) => {
    const findTodo = e.target.innerText;
    const lucasc =todos.find((element)=> element.todoName === findTodo); 
    lucasc.state = "editing";
    lucasc.todoName = e.target.innerText;
    console.log(e.target)
    todoListRender(todos)
}

const renameTask = (e) => {
    
    if (e.key === "Enter") {
        const findTodo = e.srcElement.defaultValue;
        const lucasc =todos.find((element)=> element.todoName === findTodo); 
        lucasc.todoName = e.target.value
        lucasc.state = null;
        todoListRender(todos)
  }
        
}

const clearCompletedTodos = (e) => {
    console.log(e);
    const lucasc =todos.filter((element)=> element.state === null); 
    console.log({"borar":lucasc});
    todoListRender(lucasc)
}



input.addEventListener('keydown',addTask)
 
// todoContainer
const todoListRender = (todos) => {
    //clean the todolist in dom after the previus render
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
      }

    todos.forEach((todo) => {
        console.log(todo)
        const li = document.createElement("li")
        // li.setAttribute("class", "completed");
        li.classList.add(`${todo.state}`);
        const todoElement = document.createElement("div")
        // todoElement.setAttribute("class", "view")
        todoElement.classList.add("view");

        const inputElement = document.createElement("input")
        // inputElement.setAttribute("class", "edit")
        inputElement.classList.add("edit");
        inputElement.setAttribute("value", `${todo.todoName}`)
        inputElement.addEventListener("keydown", renameTask)

        const checkboxElement = document.createElement("input")
        checkboxElement.setAttribute("type", "checkbox")
        // checkboxElement.setAttribute("class", "toggle")
        checkboxElement.classList.add("toggle")
        checkboxElement.addEventListener("change",completedAdd)
        if(todo.state === "completed"){
            checkboxElement.setAttribute("checked", "")
        }
        

        const todoText = document.createElement("label")
        todoText.textContent = `${todo.todoName}`
        todoText.addEventListener("dblclick", editingTask);

        const destroyButton = document.createElement("button")
        // destroyButton.setAttribute("class","destroy")
        destroyButton.classList.add("destroy")
        destroyButton.addEventListener("click",deleteTask);

        todoElement.appendChild(checkboxElement)
        todoElement.appendChild(todoText)
        todoElement.appendChild(destroyButton)

        li.appendChild(todoElement)
        li.appendChild(inputElement)
        
        todoList.appendChild(li)
        todosSection.appendChild(todoList)
        
       
    }) 
         
}

todoListRender(todos)



//fotter

const contador = document.createElement("strong")
contador.textContent = `${todos.length}`;
todoCount.appendChild(contador)




const footerList = [
    {href:"#/",class:"selected", text: "all"},
    {href:"#/",class: null, text: "pending"},
    {href:"#/",class: null, text: "completed"}
]

const filtersBtn = (e) => {
    const fil = e.target.textContent
    footerList.find(element => element.text===`${fil}`)
    if(fil === "all"){
        todoListRender(todos)
    }else if(fil === "pending"){
        const pending =todos.filter((element)=> element.state === null); 
        todoListRender(pending)
    }else if(fil==="completed"){
        const pending =todos.filter((element)=> element.state === "completed"); 
        todoListRender(pending)
    }
}

const footerRender = () => {
    footerList.forEach((foo)=>{    const routing = document.createElement("li")
    const route = document.createElement("a")
    route.setAttribute("href", "#/")
    route.textContent = `${foo.text}`
    route.setAttribute("class", `${foo.class}`)
    // route.classList.add("selected")
    
    route.addEventListener("click", filtersBtn)
    
    routing.appendChild(route)
    filters.appendChild(routing)
}
    )
    
}

footerRender()


clearButton.addEventListener("click", clearCompletedTodos);

