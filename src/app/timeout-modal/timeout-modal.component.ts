import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timeout-modal',
  templateUrl: './timeout-modal.component.html',
  styleUrls: ['./timeout-modal.component.scss']
})

export class TimeoutModalComponent {
  @Input() timeoutMax: number;
  @Input() timeoutCountdown: number;
  @Input() timedOut: boolean;

  constructor(public activeModal: NgbActiveModal) { }
}
