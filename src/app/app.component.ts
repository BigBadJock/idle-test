import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Keepalive } from '@ng-idle/keepalive';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { TimeoutModalComponent } from './timeout-modal/timeout-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idle-test';
  idleState = 'Not Started';
  timedOut = false;
  lastPing? : Date;
  timeoutCountdown :number =0;
  timeoutMax =5;
  idleTime = 5;
  showingModal = false;
  closeResult: string ="";
  modalRef= null;

    constructor( private idle: Idle, private keepalive: Keepalive, private modalService: NgbModal){
      idle.setIdle(this.idleTime);
      idle.setTimeout(this.timeoutMax);
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

      idle.onIdleEnd.subscribe(() => {
        this.idleState = 'No longer idle.';
        this.modalRef.componentInstance.timedOut = false;
        this.timeoutCountdown = 0;
        this.closeModal();
      });

      idle.onTimeout.subscribe(() => {
        this.idleState = 'Timed out!';
        this.timedOut = true;
        this.timeoutCountdown = 0;
        this.modalRef.componentInstance.timedOut = true;
      });
      idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
      idle.onTimeoutWarning.subscribe((countdown) => {
          if(!this.showingModal){
            this.openModal("timeoutProgress");
          }
          this.timeoutCountdown = this.timeoutMax - countdown +1;
          this.modalRef.componentInstance.timeoutCountdown = this.timeoutCountdown;
      });
  
      this.reset();
    }

    reset(){
      this.idle.watch();
      this.idleState = 'Started';
      this.timedOut = false;
      this.timeoutCountdown = 0;
      this.closeModal();
    }

    openModal(content){
      this.showingModal = true;

      this.modalRef = this.modalService.open(TimeoutModalComponent);
      this.modalRef.componentInstance.timeoutMax = this.timeoutMax;
    }

    closeModal(){
      this.showingModal = false;
      this.modalService.dismissAll();
    }

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

}

