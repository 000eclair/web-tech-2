import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { CreateStudentPayload, GetStudent } from "../../models/student.model";   

@Injectable()
export class StudentsService {
    private readonly http = inject(HttpClient);
    private readonly STUDENTS_API = 'https://localhost:3000/students';
    
    async getStudents(): Promise<GetStudent[]> {
        const response = await firstValueFrom(this.http.get<GetStudent[]>(${this.STUDENTS_API}));
        return response ?? [];
    }
    
    async createStudent(student: CreateStudentPayload): Promise<GetStudent> { 
        //TODO: Implement the logic to create a student and call the A  PI 
    }

    async deleteStudent(studentId: string): Promise<void> { 
        //TODO: Implement the logic to delete a student and call the API
    }
}