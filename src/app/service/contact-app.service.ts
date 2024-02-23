import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactApp } from './memory.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactAppService {
  [x: string]: any;

  constructor(private httpClient :HttpClient) { }


  getCustomers() :Observable<ContactApp[]>{
    return this.httpClient.get<ContactApp[]>('api/Contacts')
  }


  AddCustomers(ContactApp :ContactApp){
    return this.httpClient.post('api/Contacts' ,ContactApp)
  }

  
  UpdateCustomers(ContactApp :ContactApp){
    return this.httpClient.put('api/Contacts' ,ContactApp)
  }

  
  DeleteCustomers(id :number){
    return this.httpClient.delete(`api/Contacts/ ${id}`);
  }

  getContactById(id:number): Observable<ContactApp>
  {
    return this.httpClient.get<ContactApp>(`api/Contacts/ ${id}`)
  }

}
