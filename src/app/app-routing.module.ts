import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './course/course.component';
import { CourseGuardService } from 'src/shared/course-guard.service';
import { CanDeactivateGuardService } from 'src/shared/candeactivate-guard.service';
import { courseResolveService } from 'src/shared/course-resolve';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
 //{ path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Aboutus', component: AboutComponent },
  { path: 'Student', component: StudentComponent },
  { path: 'StudentList', component: StudentListComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'Contact', component: ContactComponent, canDeactivate: [CanDeactivateGuardService] },
  { path: 'Courses', component: CoursesComponent, resolve: { courses: courseResolveService } },
  {
    path: 'Courses', canActivateChild: [CourseGuardService], children: [
      { path: 'Course/:id', component: CourseComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
