import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  

  constructor(private param:ActivatedRoute , private service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;
  registerForm:any;
  ngOnInit(): void {
    this.registerForm= new FormGroup({
        "name": new FormControl(null,[Validators.required]),
        "contact": new FormControl(null,[Validators.required]),
        "address": new FormControl(null,[Validators.required])
    });
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
       this.menuData=this.service.foodDetails.filter((value)=>{
         return value.id == this.getMenuId;
       });
       console.log(this.menuData,'menudata');
    }
  }
  submitData(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid)
    {
      alert(`Thank You ${this.registerForm.value.name} for providing us the opportunity to serve you.Your order has been placed successfully and will be delivered in few minutes at your doorstep :)`)
      this.registerForm.reset();
    }
  
  }
  get getname(){
    return this.registerForm.get('name');
  }
  get getcontact(){
    return this.registerForm.get('contact');
  }
  get getaddress(){
    return this.registerForm.get('address');
  }


}
