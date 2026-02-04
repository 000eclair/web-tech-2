import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-create-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  name: string = '';
  course: string = '';
  year: string = '';

  constructor(private router: Router) {}

  saveStudent() {
    console.log(this.name, this.course, this.year);
    this.router.navigate(['/students']);
  }

  goBack() {
    this.router.navigate(['/students']);
  }
}

