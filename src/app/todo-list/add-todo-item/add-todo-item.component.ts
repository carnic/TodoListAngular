import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NotifService } from 'src/app/notif.service';
import { Observable } from 'rxjs';

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

  constructor(public notifService: NotifService) { }

  ngOnInit() {
    
  }

  addItemToParent(){
    this.addItem.emit(this.itemTitle.nativeElement.value);
  }

}
