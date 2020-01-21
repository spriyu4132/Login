import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './admin.login.component.html',
  styleUrls: ['./admin.login.component.css']
})
export class LoginComponent{
    admin_name = ''
    password = ''
    constructor(
      private activatedRoute: ActivatedRoute,private router: Router,
      private adminService: AdminService) { }

  onLogin() {
    if (this.admin_name.length == 0) 
    {
      alert('enter valid email')
    } 
    else if (this.password.length == 0) 
    {
      alert('enter valid password')
    } 
    
    else 
    {
      this.adminService
        .login(this.admin_name, this.password)
        .subscribe(response => {
            console.log(response);
          if (response['status'] == 'success') {
             // console.log(status)
            alert('authenticated')
           // this.router.navigate(['/labour-chart'])
            //sessionStorage['login-status']='1'
            localStorage['login_status']='1'
            localStorage['admin_name'] = response['data']['admin_name']
            this.router.navigate(['/admin-home'])
          } else {
                alert(response['error'])
          }
        })
    }
  }
}
