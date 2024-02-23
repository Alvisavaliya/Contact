import { ContactApp  } from './../service/memory.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ContactAppService } from './../service/contact-app.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  myForm = new FormGroup({
    name: new FormControl(''),
    contactNo: new FormControl(''),
    email: new FormControl(''),
  });
  


  onSubmit(){
    console.warn(this.myForm.value)
  
  }
constructor(private ContactAppService:ContactAppService ,private router:Router) { 

}

  ngOnInit(): void {
  }


  addContact()
  {
    let contactApp=new ContactApp(undefined,this.myForm.controls.name.value,
                                        this.myForm.controls.contactNo.value,
                                        this.myForm.controls.email.value)
    this.ContactAppService.AddCustomers(contactApp).subscribe(()=>
  {
      this.router.navigate(['/dashboard'])
  }) 
  
  }
}
