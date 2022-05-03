import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public deptsArray:any[]  =  [];

  public deptno:any= "";
  public dname:any= "";
  public loc:any= "";

  constructor(private httpObj:HttpClient)
  {

  }

  public  getData():void
  {
      let url:string  = "http://localhost:3002/api/depts";
      this.httpObj.get(url).subscribe(   (resData:any)  =>
      {
        // console.log(resData);
        this.deptsArray = resData.data;
      });
  }

  public  createData():void
  {
      let deptObj:any = {};
      deptObj.deptno = this.deptno;
      deptObj.dname = this.dname;
      deptObj.loc = this.loc;

      let url:string  = "http://localhost:3002/api/depts";
      this.httpObj.post(url,  deptObj).subscribe(   (resData:any)  =>
      {
        console.log(resData);
        this.getData();
      });
  }
}
