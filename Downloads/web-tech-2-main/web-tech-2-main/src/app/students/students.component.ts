import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students: { name: string; course: string; year: string }[] = [
    { name: 'John Doe', course: 'Math', year: '1' },
    { name: 'Jane Smith', course: 'Science', year: '2' }
  ];

  constructor(private router: Router) {}

  goToCreateStudent() {
    this.router.navigate(['/create-student']);
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
