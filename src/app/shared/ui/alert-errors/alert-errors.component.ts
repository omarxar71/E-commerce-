import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'alertErrors',
  standalone: true,
  imports: [],
  templateUrl: './alert-errors.component.html',
  styleUrl: './alert-errors.component.scss'
})
export class AlertErrorsComponent {
@Input() formGroup!:FormGroup;
@Input() FormControl!: string;
}
