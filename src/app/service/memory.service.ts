import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MemoryService implements InMemoryDbService{

  constructor() { }
  createDb(){
      const Contacts= [
        new ContactApp(1,'ram','32764556','a@gmail.com'),
        new ContactApp(2,'syam','3543345345','s@gmail.com'),
        new ContactApp(3,'mahi','676576534','m@gmail.com'),
        new ContactApp(4,'nyah','213565432','n@gmail.com'),
        new ContactApp(5,'vyana','43583435','v@gmail.com'),
      ];
      return{Contacts};
  }
  getId(contacts :ContactApp[]):number{
    return contacts.length >0 ?Math.max (...contacts.map(contact =>contact.id))+1:1;
  }
}

export class ContactApp{
  [x: string]: any;
  id:number
  name:string
  contactNo:string
  email:string | undefined


  constructor(id:number,
    name:string,
    ContactNo:string,
    email:string){

      this.id=id;
      this.name=name;
      this.contactNo=ContactNo;
      this.email=email;

  }
}