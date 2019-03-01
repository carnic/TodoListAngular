import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { TodoItem} from './TodoItem.model';
import { NotifService } from '../notif.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoListService, NotifService]
})
export class TodoListComponent implements OnInit {

  todolist: TodoItem[];

  constructor(public todolistService: TodoListService, public notifService: NotifService) { 
      console.log(this.todolist);
      if(this.todolist == undefined){
          this.todolistService.getList().subscribe(
          (res) => {
            this.todolist = res;
          },
          (err) => console.log(err)
        );
      }
  }

  ngOnInit() {
    this.todolistService.itemAdded.subscribe(
      (item: TodoItem) => {
        this.todolist.push(item);
      },
      (err) => console.log("error"+err)
    )
  }

  addItem(itemTitle: String){
    if(itemTitle!=""){
      this.todolistService.addItem(new TodoItem(this.todolist.length, itemTitle, false));
    }
    else{
      this.notifService.setAddStatus(true);
    }
  }

  updateItem(event: {item, operation: string}){
    if(event.operation == "delete"){
      this.deleteItem(event.item);
    }
    else if(event.operation == "update"){
      this.completeItem(event.item);
    }
  }

  getIndex(itemId: number) {
    return this.todolist.findIndex((item) => item.id == itemId);
  }

  getItem(itemId: number){
    return this.todolist.filter((item) => item.id == itemId)[0];
  }

  completeItem(item: TodoItem){
    this.todolistService.updateItem(item).subscribe(
      (res) => {
        if(res.status == 200){
          console.log(res); // Add a span to show success msg
        }
      }
    );
  }

  deleteItem(itemId: number){
    this.todolistService.deleteItem(itemId).subscribe(
      (res) => {
        if(res.status == 200){
          this.todolist = this.todolist.filter((item: TodoItem) => {
            return item.id !=itemId;
          });
        }
      }
    );
  }

}
