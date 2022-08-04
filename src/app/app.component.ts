import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoObject } from './to-do-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  ToDoList: ToDoObject[] = [
    {
      task: "Shower",
      completed: true
    },
    {
      task: "Fend off front door solicitor",
      completed: false
    },
    {
      task: "Explore washing machine for lost socks",
      completed: false
    },
    {
      task: "Stare proudly at freshy mowed lawn",
      completed: true
    },
    {
      task: "Stare proudly at freshy mowed lawn in front of neighbor",
      completed: false
    },
    {
      task: "Locate beans",
      completed: false
    },
  ];

  completeTask(task:ToDoObject):void{
    task.completed = true;
  }

  addTask(form:NgForm):void{
    let newTask:ToDoObject = {
      task: form.form.value.task,
      completed: false
    };
    this.ToDoList.push(newTask);

  }
}
