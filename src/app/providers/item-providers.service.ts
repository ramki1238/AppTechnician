import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const  httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};
const ApiUrl="http://ijsrie.com/phpapi/api";
@Injectable({
  providedIn: 'root'
})

export class ItemProvidersService {

  states=[]

  constructor(private http:HttpClient) { }

  getStatesData(): Observable<any> {
    const dataUrl = ApiUrl+'/stateitems.php';
    return this.http.get(dataUrl,{responseType: 'text'} );
  }
  getDistrictData(): Observable<any> {
    const dataUrl = ApiUrl+'/distitems.php';
    return this.http.get(dataUrl,{responseType: 'text'} );
  }
  getCityData(): Observable<any> {
    const dataUrl = ApiUrl+'/mandalitems.php';
    return this.http.get(dataUrl,{responseType: 'text'} );
  }
}
