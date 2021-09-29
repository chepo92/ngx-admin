
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Person } from './person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Project } from './../models/proyect';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }
 
  getPeople(): Observable<User[]> {
    console.log('getPeople '+this.baseURL + 'usuarios')
    return this.http.get<User[]>(this.baseURL + 'usuarios')
  }
 
  addPerson(person:User): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'usuarios', body,{'headers':headers})
  }

  getProjects(): Observable<Project[]> {
    console.log('getPeople '+this.baseURL + 'proyectos')
    return this.http.get<Project[]>(this.baseURL + 'proyectos')
  }
 
  addProject(project:Project): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(project);
    console.log(body)
    return this.http.post(this.baseURL + 'proyectos', body,{'headers':headers})
  }  
 
}