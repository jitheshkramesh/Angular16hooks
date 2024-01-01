import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from 'src/shared/auth.services';
import { CourseGuardService } from 'src/shared/course-guard.service';
import { CanDeactivateGuardService } from 'src/shared/candeactivate-guard.service';
import { CommonModule, PercentPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { courseResolveService } from 'src/shared/course-resolve';
import { StudentComponent } from './student/student.component';
import { StudentService } from 'src/shared/student.service';
import { PercentagePipe } from "../shared/percentage.pipe";
import { FilterPipe } from 'src/shared/filter.pipe';
import { StudentListComponent } from './student-list/student-list.component';
import { UserRegisterComponent } from './user-register/user-register.component';
// import {percentage} from '../shared/percentage.pipe';

@NgModule({
    declarations: [
        AppComponent, 
        ChildComponent,
        HomeComponent,
        AboutComponent,
        CoursesComponent,
        CourseComponent,
        ContactComponent,
        ErrorComponent,
        StudentComponent,
        FilterPipe,
        StudentListComponent,
        UserRegisterComponent
    ],
    providers: [AuthService, CourseGuardService,
        CanDeactivateGuardService, courseResolveService, StudentService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        PercentagePipe
    ]
})
export class AppModule { }
