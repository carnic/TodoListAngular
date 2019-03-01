import { EventEmitter, Output } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/Rx';
import { stat } from "fs";
import { Observable } from "rxjs/Rx";

export class NotifService{

    private _addStatus = new BehaviorSubject<boolean>(false);

    setAddStatus(state: boolean){
        this._addStatus.next(state);
    }

    getAddStatus(): Observable<boolean>{
        return this._addStatus.asObservable();
    }

    @Output() deleteStatus = new EventEmitter();
    @Output() updateStatus = new EventEmitter();
    @Output() completedStatus = new EventEmitter();
}