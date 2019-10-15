import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public id = 4;
  constructor(private router: Router) {
    // this.router.navigateByUrl('');
    // this.router.navigate([''], {queryParams: {}});
  }

  ngOnInit() {
  }

  routeTo(key) {
    if (key === 'user') {
      // this.router.navigateByUrl('/user-info/' + this.id);
      // this.router.navigateByUrl('/asjggdashajasjdaksjdlkasjd');
      this.router.navigate(['user-info/', this.id], { queryParams: { userName: 'nikhil', age: 24 }, fragment: 'hello' });
    } else if (key === 'fruits') {
      this.router.navigateByUrl('fruits');
    } else if (key === 'tempalteDrivenForms') {
      this.router.navigateByUrl('/tempalteDrivenForms');
    } else if (key === 'reactiveForms') {
      this.router.navigate(['/reactiveForms']);
    } else {
      this.router.navigateByUrl('/manage-users');
    }
  }
}
