import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private authData = {
    "user1": {
      "name": "Admin",
      "permission": "all",
      "password": "Admin"
    },
    "user2": {
      "name": "Myname",
      "permission": "none",
      "password": "test"
    }
  };
  public fruits: any = [{
    "name": "Apple",
    "quantity": 10
  }, {
    "name": "Orange",
    "quantity": 10
  }];
  public cartItems: any[] = [];
  public loginStatus!: boolean;
  public permission!: any;
  LoginForm!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    debugger
    if (this.authData.user1.name == this.LoginForm.value.name && this.authData.user1.password == this.LoginForm.value.password) {
      alert("Login As Admin");
      this.loginStatus = true;
      this.permission = this.authData.user1.permission
    }
    else if (this.authData.user2.name == this.LoginForm.value.name && this.authData.user2.password == this.LoginForm.value.password) {
      alert("Login As User");
      this.loginStatus = true;
      this.permission = this.authData.user2.permission
    }
    else {
      alert("Login Failed");
      this.loginStatus = false;
    }
  }
  cartItem(AddItem: boolean, fruitName: string) {
   if(AddItem){
    const item = this.fruits.filter((x: any) => (x.name == fruitName))[0]
    const index=this.fruits.findIndex((x: any) => (x.name == fruitName));
    this.fruits[index].quantity=this.fruits[index].quantity-1;
    this.cartItems.push(item);
   }
   else{
    const index=this.fruits.findIndex((x: any) => (x.name == fruitName));
    this.fruits[index].quantity=this.fruits[index].quantity+1;
    this.cartItems.pop();
   }
  }

}
