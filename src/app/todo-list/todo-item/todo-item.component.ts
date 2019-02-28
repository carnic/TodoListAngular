import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../TodoItem.model';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [TodoListService]
})
export class TodoItemComponent implements OnInit {

  @Input() public item: TodoItem;
  @Output() itemUpdated = new EventEmitter<{item: number| TodoItem, operation: String}>();
  
  constructor(public todolistService: TodoListService) { }

  ngOnInit() {
  }

  deleteItem(itemId: number){
    this.itemUpdated.emit({item: itemId, operation: "delete"});
  }

  completedItem(item: TodoItem){
    this.itemUpdated.emit({item: item, operation: "update"});
  }
}
