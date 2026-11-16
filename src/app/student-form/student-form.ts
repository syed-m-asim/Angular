import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-student-form',
  styleUrl: './student-form.css',
  templateUrl: './student-form.html',
})
export class StudentForm {
student={
  name:'',
email:'',
password:''
}

onSubmit(){
  console.log("Form data", this.student)
  alert("form submitted")
}
}
