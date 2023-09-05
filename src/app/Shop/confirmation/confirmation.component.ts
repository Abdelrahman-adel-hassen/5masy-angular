import { Component, OnInit } from '@angular/core';
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  faCheckCircle = faCheckCircle;

}
