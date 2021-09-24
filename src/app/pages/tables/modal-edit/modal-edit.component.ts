import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})


export class ModalEditComponent implements OnInit {

 
  title = 'modal2';
  editProfileForm: FormGroup;
  userList = [
  {
   id: "1",
   firstname: "Aiman",
   lastname: "Rahmat", 
   username: "aimanrahmat",
   email: "aimanrahmat@gmail.com"
  },
  {
   id: "2",
   firstname: "Christiano",
   lastname: "Ronaldo",
   username: "ronaldo7",
   email: "ronaldo7@gmail.com"
  },
  {
   id: "3",
   firstname: "Wayne",
   lastname: "Rooney",
   username: "rooney8",
   email: "rooney8@gmail.com"
  }];
  
  constructor(private fb: FormBuilder, private modalService: NgbModal) {}
  ngOnInit() {
   this.editProfileForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    username: [''],
    email: ['']
   });
  }
  openModal(targetModal, user) {
   this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static'
   });
  
   this.editProfileForm.patchValue({
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    email: user.email
   });
  }
  onSubmit() {
   this.modalService.dismissAll();
   console.log("res:", this.editProfileForm.getRawValue());
  }
 }