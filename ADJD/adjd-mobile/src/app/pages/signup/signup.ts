import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { ToastController } from '@ionic/angular';

declare var Swal;


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup = {
    username: '',
    first_name: '',
    last_name: '',
    birthdate: '',
    identity: '',
    password: ''
  };
  submitted = false;

  showIdentity = false;

  constructor(
    public router: Router,
    public userData: UserData,
    public toastController: ToastController
  ) { }

  onCamera() {
    this.showIdentity = true
    this.successFlow()
  }

   successFlow() {

    Swal.fire({
      title: 'Extracting Personal Info ...',
      imageUrl: 'assets/images/scan_id.gif',
      // imageHeight: 400,
      // imageWidth: 400,
      imageAlt: 'A tall image',
      showCancelButton: false,
      showConfirmButton: false
    })
    setTimeout(() => {
      Swal.close();

      Swal.fire({
        title: 'Personal information extracted successfully from your card.',
        icon: 'success',
        // iconHtml: '؟',
        confirmButtonText: 'Ok',
        showCloseButton: true
      })

    }, 4000);

    this.signup.first_name ="Ahmad Mohamad"
    this.signup.last_name ="Abudalla"
    this.signup.identity ="1628568621346565"
    this.signup.birthdate ="02-06-1990"

    // $('#name').val("Ahmad Mohamad Abou Allah")

    // $('#dob').val("02-06-1990")

    // $('#nationality').val("United Arab Emirates")

    // $('#id').val("1628568621346565")

    // $('#gender').val("male")


  }

  async onSignup(){
    const toast =  await this.toastController.create({
      message: 'Account created.',
      duration: 2000,
      cssClass:'e-toast'
    });

    toast.present();

    this.router.navigateByUrl('/citizen/citizen-home');
  }

}
