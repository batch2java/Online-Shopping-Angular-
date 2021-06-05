import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';


import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {
  customers!:any;
  customer:Customer=new Customer();
  id!:number;
  isDivVisible: boolean= false;
  editform: string = 'none';
  country = ['Australia', 'India', 'Russia', 'United Kingdom(UK)','United States America(USA)'];
  constructor(private service:CustomerService, private router: Router ) { }


  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.id=parseInt(sessionStorage.getItem('id') as string);

   //this.customer.id=sessionStorage.getItem('id')  ;
   this.service.getCustomerById(this.id)
     .subscribe(
      data => { console.log(data); 
      this.customer=data;
    
      
      },
      error => { console.log(error);  alert(error);}
      );
    }
    
  
  remove(id:number):void{
    //this.products = this.service.removeProductById(pid);
    this.service.removeCustomer(id)
      .subscribe(
        data => { console.log(data); 
         // this.products = data as Product[];
          this.customers= data ;
          console.log(this.customers);
        },
        error => { console.log(error);  alert(error);}
      );
     
  
     
  }
  detail(id:number):void{
    this.isDivVisible=true;
    this.service.getCustomerById(id)
      .subscribe(
        data => { console.log(data); this.customer=data;  },
        //error => { console.log(error);  alert(error);}
      );
     
  }
  editdetail(id:number):void{
    this.isDivVisible=false;
    this.service.updateCustomer(this.customer)
      .subscribe(
        data => { console.log(data);  this.customer=data; this.reloadData();},
        //error => { console.log(error);  }
      );
  }
 
}

 
