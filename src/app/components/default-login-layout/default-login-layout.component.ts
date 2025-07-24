import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = 'Login';
  @Input() secondaryBtnText: string = 'Signup';
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit: EventEmitter<void> = new EventEmitter<void>();

  @Output("navigate") onNavigate: EventEmitter<void> = new EventEmitter<void>();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
