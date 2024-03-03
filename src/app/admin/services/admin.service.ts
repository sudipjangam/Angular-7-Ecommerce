import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public user_url = "http://localhost:3000/user/";
  public product_url = "http://localhost:3000/products/";
  public order_url = "http://localhost:3000/orders/";
  public all_user_url = "http://localhost:3000/user";
  constructor(private apiService: ApiService) {

  }
  userDashBoardData(){
      return this.apiService.get(this.user_url);
  }
  productDashBoardData(){
    return this.apiService.get(this.product_url);
  }
  allUser():Observable<any>{
    return this.apiService.get(this.all_user_url);
  }
  addUser(user_dto:any):Observable<any>{
    return this.apiService.post(this.user_url,user_dto);
  }
  //get data of indivisual user
  singleUser(user_id:any){
    return this.apiService.get(this.user_url,user_id);
  }
  //update user
  updateUser(user_id: any, user_dto: any): Observable<any> {
      return this.apiService.put(this.user_url + user_id, user_dto);
  }
  //delete user
  deleteUser(user_id: any): Observable<any> {
      return this.apiService.delete(this.user_url + user_id);
  }
}
