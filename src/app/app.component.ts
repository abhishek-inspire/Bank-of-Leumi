import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TopicsService } from './topics.service';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task List';

  // String Interpolation
   topics = [];
   userModel = new User('Rob', 'Rob@test.com', 123456789, '');

  constructor(private topicsService: TopicsService, private enrollmentService: EnrollmentService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.topicsService.getTopics()
    .subscribe(data => this.topics = data);
  }
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel)  // POST
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    );
  }
}
