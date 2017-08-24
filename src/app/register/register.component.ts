import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'plugins/ng2-simple-dropdown/ng2-simple-dropdown.module';
import {AuthService} from "../services/auth.service";
import {Angular2TokenService} from "angular2-token";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 @Output() onFormResult = new EventEmitter<any>();
  constructor(private tokenAuthService:AuthService,private router:Router) {
    const quest1_data = { };
    this.questions_1 = [
      new Item('What is your pet name?'),
      new Item('What is your city name?'),
      new Item('What is your childhood name?', quest1_data)
    ];
    const quest2_data = { };
    this.questions_2 = [
      new Item('Where were you born?'),
      new Item('Which recipe do you like?'),
      new Item('Who is favourite hero?', quest2_data)
    ];
  }

  ngOnInit() {
  }

  //security block
  questions_1: Item[] = [];
  selectedQuest1: Item;
  defaultQuest1 = '';
  questions_2: Item[] = [];
  selectedQuest2: Item;
  defaultQuest2 = '';
  //security block end
  step1: any = {
    showNext: true,
    showPrev: false
  };
  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showNext: true,
    showPrev: true,
    sq1: '',
    sq2: '',
    sa1: '',
    sa2:''

  };

  data: any = {
    email: '',
    password: '',
    confirmation_password:'',
    middle_name: '',
    last_name: '',
    first_name: '',
    address_line1: '',
    address_line2: '',
    sa1: '',
    sa2:'',
    sq1: '',
    sq2:''
  };

  isCompleted: boolean = false;

  onStep1Next(event) {

  }

  onStep2Next(event) {
    console.log(event);
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }
  onStep4Next(event) {
    console.log('Step3 - Next');
  }
  onComplete(event) {
    this.isCompleted = true;
    this.tokenAuthService.registerUser(this.data).subscribe(

        (res) => {

          if (res.status == 200){
            this.onFormResult.emit({signedUp: true, res});
            this.tokenAuthService.logOutUser().subscribe(() => this.router.navigate(['thankyou']) );
          }

        },

        (err) => {
          console.log(err.json())
          this.onFormResult.emit({signedUp: false, err})
        }
    )
  }

  onStepChanged(step) {

    console.log('Changed to ' + step.title);
  }

  onSignUpSubmit(){
    this.tokenAuthService.registerUser(this.data).subscribe(

        (res) => {

          if (res.status == 200){
            this.onFormResult.emit({signedUp: true, res})
          }

        },

        (err) => {
          console.log(err.json())
          this.onFormResult.emit({signedUp: false, err})
        }
    )

  }

}
