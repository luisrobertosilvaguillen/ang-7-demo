import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users.model';
import swal from 'sweetalert2';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor(public _userService: UserService) { 
    this.user = this._userService.user;
  }
  user: User;
  image: File;
  tempImage: string;
  ngOnInit() {
  }
  saveUser(user:User){
    this.user.name = user.name;
    this.user.email = user.email;
    this._userService.updateUser(this.user).subscribe();
  }

  selectImage(file){
    if(!file){
      this.image = null;
      return;
    }
    if(file.type.indexOf('image') < 0){
      this.image = null;
      swal.fire({title: "Archivo Inválido", text: "El archivono es una imagen", type: 'error'})
      return;
    }    
    this.image = file;

    let reader = new FileReader();
    let urlTempImage = reader.readAsDataURL(file);
    reader.onloadend = () => this.tempImage = reader.result as string;

  }

  changeImage(){
    this._userService.changeImage(this.image, this.user._id);
  }
}
