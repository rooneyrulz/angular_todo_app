import { Component } from "@angular/core";

@Component ({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  heading: string;
  customers: any[];
  name: string;
  username: string;
  email: string;
  country: string;
  isActive: boolean = false;

  constructor() {
    console.log(`constructor is running...`);
  }

  ngOnInit() {
    console.log(`ngOnInit is running...`);
    this.customers = [{
      name: "Jhon Doe",
      username: "jhon",
      email: "jhon@doe.com",
      country: "Canada"
    },
    {
      name: "Shaown Mick",
      username: "shaown",
      email: "mick@done.com",
      country: "Florida"
    },
    {
      name: "Denail",
      username: "denial",
      email: "denial@donny.com",
      country: "France"
    }
    
  ];
  }

  onHandleSubmit(e) {
    if (this.name !== undefined && this.username !== undefined && this.email !== undefined && this.country !== undefined) {
      const newUser = {
        name: this.name,
        username: this.username,
        email: this.email,
        country: this.country
      }
      console.log(newUser);
      this.customers.unshift(newUser);
    } else {
      alert(`please fill out the all fields..`);
    }
  }

  onHandleDelete(user) {
    console.log(user);
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i] === user) {
        this.customers.splice(i, 1);
      }      
    }
  }

  onToggleUser() {
    this.isActive = !this.isActive;
  }
}