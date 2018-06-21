import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  retrieveTasks() {
    console.log('TaskService > retrieveTasks()');
    return this._http.get('/tasks');
  }
  createTask(task) {
    console.log('TaskService > createTask(task)', task);
    return this._http.post('/tasks', task);
  }

  deleteTask(id) {
    console.log('TaskService > deleteTask(id)', id);
    return this._http.delete('/tasks/' + id);
  }

}
