import { Component, OnInit } from '@angular/core';
import { ContactAppService } from '../service/contact-app.service';
import { ContactApp } from '../service/memory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cotactAppService:ContactAppService) { }
  ContactAppOriginal :ContactApp[] | undefined;
  uicontactlist:ContactApp[] | undefined;

  ngOnInit(): void {

    this.cotactAppService.getCustomers().subscribe((res: ContactApp[])=>{
     
      console.log(res);
      this.ContactAppOriginal =res;
      this.uicontactlist =this.ContactAppOriginal;
    })
  }

// search item (name through,email and contact)
  onSearchKey(val:string)
  {
    console.log(val);
    let filterList=[];
    if(val)
    {
      this.ContactAppOriginal.forEach(element => {
        if(
          element.name.toLowerCase().includes(val.toLowerCase()) ||
          element.contactNo.toLowerCase().includes(val.toLowerCase()) || 
          element.email.toLowerCase().includes(val.toLowerCase()) 
        )
        {
          filterList.push(element)
        }
      });

      this.uicontactlist=filterList;
    }
    else{
      this.uicontactlist=this.ContactAppOriginal
    }
  }



}
