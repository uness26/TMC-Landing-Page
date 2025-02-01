import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { PopupService } from '../popup-service';

@Component({
  selector: 'app-buy-token',
  templateUrl: './buy-token.component.html',
  styleUrls: ['./buy-token.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyTokenComponent implements OnInit {
  popupId = 'buyToken';
  popupVisible: boolean = false;
  buyTokenForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.popupVisible = this.popupService.getPopupVisibility(this.popupId);
    this.initializeForm();
  }

  initializeForm(): void {
    this.buyTokenForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(control.value) ? null : { invalidPassword: true };
  }

  get formControls() {
    return this.buyTokenForm.controls;
  }

  closePopup() : void{
    this.popupService.hidePopup(this.popupId);
    this.popupVisible= false;
  }

  onSubmit() : void {
    if (this.buyTokenForm.valid) {
      console.log('Form submitted successfully!');
      this.closePopup();
    } else {
      console.error('Form submission failed. Please check the form.');
      this.errorMessage = 'Please fix the errors in the form.';
    }
  }
}
