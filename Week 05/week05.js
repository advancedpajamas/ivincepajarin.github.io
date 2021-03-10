/*
	Name: Ivince Pajarin
	Professor: Dr. Anna Baynes
	Class: CSC196W-01 - Web Programming
	Assignment: Week 05 - How to Make Changes to the DOM
	Due date: 3/2/2021 -> Moved to 3/9/2021
	week05.js
*/

window.onload = function() {
    //To-do list ul element
    const todoList = document.querySelector('ul');
    const input = document.querySelector('input');
    const addButton = document.querySelector('button');
  
    addButton.onclick = function() {
        //Create new to-do
      const newTodo = document.createElement('li');
      const newText = document.createElement('span');
      const newButton = document.createElement('button');
  
      newTodo.appendChild(newText); //Add new todo to the end of the list
      newTodo.classList.add('todo-li');
      newText.textContent = input.value;
      newButton.textContent = 'Delete';
      newButton.classList.add('todo-delete-btn');
      newTodo.appendChild(newButton);
      todoList.appendChild(newTodo);
  
      newButton.onclick = function(e) {
        todoList.removeChild(newTodo);
      }
    }
  }