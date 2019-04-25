import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/service.index';
import swal from 'sweetalert2';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  constructor(public _userService : UserService, 
    public _modalUploadService: ModalUploadService) { }
  users : User[] = []
  from: number = 0;
  rows: number = 0;
  loading: boolean;
  ngOnInit() {
    this.loadUsers();
    this._modalUploadService.trigger.subscribe(resp => {
      this.loadUsers();
    });
  }
  showModal(_id:string){
    this._modalUploadService.showModal("users", _id);
  }
  loadUsers(){
    this.loading=true;
    this._userService.loadUsers(this.from).subscribe( (resp :any) => {
      this.rows = resp.total;
      this.users = resp.users;
      this.loading =false;
    });
  }
  changeFrom(from:number){
    let newFrom = this.from + from; 

    if(newFrom >= this.rows || newFrom < 0)
      return;

    this.from += from;
    this.loadUsers();
  }
  searchUsers(term:string){
    if(term != '')
    {

      this.loading=true;
      this._userService.searchUsers(term).subscribe( (resp :User[]) => {
        if(resp)
        {
          this.rows = resp.length;
          this.users = resp;
          this.loading =false;
        }
      });
    }
    else{
      this.loadUsers();
    }
  }
  saveUser(user:User){
    this._userService.updateUser(user).subscribe();
  }
  deleteUser(user:User){
    if(user._id == this._userService.user._id){
      swal.fire({title: "Acción no valida", text: "No se puede borrar a si mismo", type: 'error'});
      return;
    }

    swal.fire({
      title: 'Advertencia',
      text: `Desea eliminar a ${user.name}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.value) {
        this._userService.deleteUser(user._id).subscribe((resp:boolean) => {
          console.log(resp)
          if(resp){
            this.loadUsers();
          }
        });
      }
    })
  }
}
