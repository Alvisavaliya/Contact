import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms'
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ContactAppService } from './../service/contact-app.service';
import { ContactApp } from '../service/memory.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  profileForm = new FormGroup({
    name: new FormControl(''),
    contactNo: new FormControl(''),
    email: new FormControl(''),
  });
  selectedRecord: ContactApp;
  
  onSubmit(){
    console.warn(this.profileForm.value)
  }
  constructor(private ContactAppService:ContactAppService, private activatedRoute :ActivatedRoute ,private router:Router){ }

  ngOnInit(): void {

    let id=this.activatedRoute.snapshot.params['id']
    console.log(id);
    this.ContactAppService.getContactById(id).subscribe((res:ContactApp)=>
    
    {
      this.selectedRecord=res;
      this.profileForm.controls.name.setValue(this.selectedRecord.name),
      this.profileForm.controls.contactNo.setValue(this.selectedRecord.contactNo),
      this.profileForm.controls.email.setValue(this.selectedRecord.email)
    })
    
  }


  
  updateContact()
  {

    this.selectedRecord.name= this.profileForm.controls.name.value
    this.selectedRecord.contactNo= this.profileForm.controls.contactNo.value
    this.selectedRecord.email= this.profileForm.controls.email.value

    
    this.ContactAppService.UpdateCustomers(this.selectedRecord).subscribe(()=>
  {
      this.router.navigate(['/dashboard'])
  }) 
  
  }
}
