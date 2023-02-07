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

input.addEventListener("input", (e) =>console.log(e.target.value))
// todoContainer

const li = document.createElement("li")
// li.setAttribute("class", "completed");
li.classList.add("completed");
const todoElement = document.createElement("div")
// todoElement.setAttribute("class", "view")
todoElement.classList.add("view");

const inputElement = document.createElement("input")
// inputElement.setAttribute("class", "edit")
inputElement.classList.add("edit");
inputElement.setAttribute("value", "Learn Javascript")

const checkboxElement = document.createElement("input")
checkboxElement.setAttribute("type", "checkbox")
// checkboxElement.setAttribute("class", "toggle")
checkboxElement.classList.add("toggle")
checkboxElement.setAttribute("checked", "")

const todoText = document.createElement("label")
todoText.textContent = "Learn Javascript"

const destroyButton = document.createElement("button")
// destroyButton.setAttribute("class","destroy")
destroyButton.classList.add("destroy")

todoElement.appendChild(checkboxElement)
todoElement.appendChild(todoText)
todoElement.appendChild(destroyButton)

li.appendChild(todoElement)
li.appendChild(inputElement)
todoList.appendChild(li)
todosSection.appendChild(todoList)


//fotter

const contador = document.createElement("strong")
contador.textContent = 12;
todoCount.appendChild(contador)

const routing = document.createElement("li")
const route = document.createElement("a")
route.setAttribute("href", "#/")
route.textContent = "all"
// route.setAttribute("class", "selected")
route.classList.add("selected")

routing.appendChild(route)
filters.appendChild(routing)

