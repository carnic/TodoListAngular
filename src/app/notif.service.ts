import { EventEmitter, Output } from "@angular/core";
import { Observable, Observer } from "rxjs";

export class NotifService{

    @Output() deleteStatus = new EventEmitter();
    @Output() updateStatus = new EventEmitter();
    @Output() completedStatus = new EventEmitter();
}