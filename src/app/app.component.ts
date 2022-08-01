import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ToDo : {name:string , done:boolean}[] = [
    {
      name: "wake up",
      done : true
    },
    {
      name: "shower",
      done : true
    },
    {
      name: "pray",
      done : false
    }
  ]
  ToDoFiltered : {name:string , done:boolean}[] = this.ToDo;
  newItem : string = ""
  editedItem:string = ""
  newEditedItem : string = ""
  isEditClicked:boolean = false ;

  addItem(item:any){
     this.ToDo.push({name :item.value['todoItem'] , done : false});
  }

  deleteItem(item:any){
   let index= this.ToDo.indexOf(item);
   this.ToDo.splice(index , 1);
  }

  editItem(item:any){
    this.isEditClicked = true ;
    this.editedItem = item.name ;
  }

  saveItem(item:any , editedItem:any){
    this.isEditClicked = false ;
    let index= this.ToDo.indexOf(editedItem);
    this.ToDo[index].name= item.value['editedItem'];
  }

 allItems(){
   this.ToDoFiltered = this.ToDo ;
 }
 todoItems(){
   this.ToDoFiltered= this.ToDo.filter(this.filterTodo)
 }
 doneItems(){
  this.ToDoFiltered= this.ToDo.filter(this.filterDone)
 }
 filterDone(item:{name:string , done:boolean}){
  return item.done ;
 }
 filterTodo(item:{name:string , done:boolean}){
  return !item.done ;
 }
 }

