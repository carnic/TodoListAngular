export class TodoItem{
    id: number;
    title: String;
    completed: Boolean;
    
    constructor (id: number, title: String, completed: Boolean){
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}