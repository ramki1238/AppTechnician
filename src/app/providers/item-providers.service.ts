import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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
 

  constructor(private http:HttpClient,
    private loadingController:LoadingController) { }

  getStatesData(): Observable<any> {
    const dataUrl = ApiUrl+'/stateitems.php';
    return this.http.get(dataUrl,{responseType: 'json'} );
  }
  getDistrictData(): Observable<any> {
    const dataUrl = ApiUrl+'/distitems.php';
    return this.http.get(dataUrl,{responseType: 'json'} );
  }
  getCityData(): Observable<any> {
    const dataUrl = ApiUrl+'/mandalitems.php';
    return this.http.get(dataUrl,{responseType: 'json'} );
  }

  saveItemsData(ItmData): Observable<any> {
    var jsontypeData = JSON.stringify(ItmData);
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      })
    };
    const dataUrl = ApiUrl+'/createitems.php';
    return this.http.post(dataUrl,jsontypeData,httpOptions);
  }
  getMainItemsStatus(usertype,dateoftravel): Observable<any> {
    let remUrl="?type="+usertype+"&&role=active&&dateoftravel="+dateoftravel;
    const dataUrl = ApiUrl+'/mainitems.php'+remUrl;
    return this.http.get(dataUrl,{responseType: 'json'} );
  }
  getUsersList(usertype,dateoftravel): Observable<UserDatabase> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      })
    };
    // let remUrl="?type="+usertype+"&&role=active&&dateoftravel="+dateoftravel;
    let remUrl="?type="+usertype+"&&role=active&&dateoftravel=2012-06-01";

    const dataUrl = ApiUrl+'/getusers.php'+remUrl;
    console.log(dataUrl);
    return this.http.get<UserDatabase>(dataUrl,{responseType: 'json'} );
  }
}
