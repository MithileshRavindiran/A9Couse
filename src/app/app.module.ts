import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './custom-directive/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { PostsComponent } from './posts/posts.component';
import { AppExceptionHandler } from './common/exceptions/app.exception.handler';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent,
    BootstrapPanelComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewcourseComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: ErrorHandler, useClass:AppExceptionHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
