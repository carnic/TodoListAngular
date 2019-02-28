import { Http } from "@angular/http";

import { TodoItem } from "./TodoItem.model";
import { Injectable, EventEmitter } from "@angular/core";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs/Rx";

@Injectable()
export class TodoListService{
    
    itemAdded = new EventEmitter<TodoItem>();

    todolist: TodoItem[];
    url: String = "https://jsonplaceholder.typicode.com/todos";
    getParam: String = "?_limit=10";

    constructor(private http: Http){}

    getList(): Observable<TodoItem[]>{
        return this.http.get(`${this.url}${this.getParam}`)
            .pipe(map((res) => {
                    return res.json();
                })
            );
    }

    addItem(item: TodoItem): void{
        this.http.post(`${this.url}`, JSON.stringify(item)).subscribe(
            (res) => {
                if(res.status == 201){
                    this.itemAdded.emit(item);
                }
            },
            (err) => console.log(err)
        );
    }

    deleteItem(itemId: number){
        return this.http.delete(`${this.url}/${itemId}`);
    }

    updateItem(item: TodoItem){
        return this.http.put(`${this.url}/${item.id}`, JSON.stringify(item));
    }
}