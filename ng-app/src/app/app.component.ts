import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks: any = [];
  task = { title: 'initial value title', description: 'initial value desc'};

    constructor(private _taskService: TaskService) {
      console.log('AppComponent > Constructor()');
      this.retrieveTasks();
    }

    retrieveTasks() {
      console.log('AppComponent > retrieveTasks()');
      const taskObservable = this._taskService.retrieveTasks();
      taskObservable.subscribe(
        (tasks) => {
          this.tasks = tasks;
        },
        (err) => { },
        () => {  }
      );
    }

    createTask(taskForm: NgForm) {
      console.log('AppComponent > createTask(taskForm)', taskForm);
      const observable = this._taskService.createTask(taskForm.value);
      observable.subscribe((response) => {
        this.retrieveTasks();
      });
      taskForm.resetForm();
    }

    deleteTask(id) {
      console.log('AppComponent > deleteTask(id)', id);
      const observable = this._taskService.deleteTask(id);
      observable.subscribe((response) => {
        this.retrieveTasks();
      });
    }
}
