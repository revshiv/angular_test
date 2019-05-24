declare var $: any;
import { Component, OnInit } from '@angular/core';
import  {GlobalServiceService} from '../global-service.service';
import  {MessageService} from '../message.service';

import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm  : FormGroup;
  loading : boolean = false;
  companyForm :FormGroup;
  originalData : any [] = [];
  currentData : any;
  
  constructor(private http:Http,
              private router: Router,
              private globalService : GlobalServiceService,
              private _message : MessageService) { 
  }

  ngOnInit() {
  	// $('#myModal').modal({backdrop: 'static',
   //  keyboard: false}); 
      this.getData();
    }



  close(){
  	$('#myModal1').modal('hide'); 
  	$('#myModal').modal('show'); 
  }




 getData(){
     this.loading = true;
    let url = "https://hn.algolia.com/api/v1/search_by_date?tags=story";
      this.globalService.GetRequest(url).subscribe(response=>{
        if(response[0].json.hits){
          this.loading = false;
          this.originalData = response[0].json.hits;
        }else{
          this.loading = false;
          this.globalService.showNotification(response[0].json.message,4);
        }
      });
  
  }

openDialog(data){
  $('#myModal').modal('show'); 
  this.currentData = data;
}


}


