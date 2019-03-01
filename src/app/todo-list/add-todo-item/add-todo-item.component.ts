import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NotifService } from 'src/app/notif.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css'],
  providers: [NotifService]
})
export class AddTodoItemComponent implements OnInit {

  @Output() addItem = new EventEmitter<String>();
  @ViewChild('itemTitle') itemTitle: ElementRef;
  status: {error: Boolean, message: String};
  state = false;

  constructor(public notifService: NotifService) { }

  ngOnInit() {
    
  }

  addItemToParent(){
    this.addItem.emit(this.itemTitle.nativeElement.value);
    this.notifService.getAddStatus().subscribe(
      (data: boolean)=> {
        console.log(data);
        let message = (!data)?"Item title has to be entered.":"Item has been Added.";
        console.log(message);
        this.status= {error: data, message: message};
        this.state = true;
      }
    );
  }

}
