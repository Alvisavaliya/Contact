import { ActivatedRoute, Route, Router } from '@angular/router';
import { ContactAppService } from './../service/contact-app.service';
import { Component, OnInit } from '@angular/core';
import { ContactApp } from '../service/memory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  ContactAppRecord: ContactApp;

  constructor(private ContactAppService:ContactAppService, private activatedRoute :ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {

  let id=this.activatedRoute.snapshot.params['id'];
  console.log(id);
  
  this.ContactAppService.getContactById(id).subscribe((res :ContactApp)=>
  {
    this.ContactAppRecord=res;
  })
  }

  DeleteConfirm()
  {
    let id =this.activatedRoute.snapshot.params['id']
    this.ContactAppService.DeleteCustomers(id).subscribe(()=>
    {
      this.router.navigate(['/dashboard'])
    })
    Swal.fire({title:"Delete",
              icon:"success",
              text: "Record deleted succesfully",})
  }
}
