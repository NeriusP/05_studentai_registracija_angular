import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-studentai',
  templateUrl: './studentai.component.html',
  styleUrls: ['./studentai.component.css']
})
export class StudentaiComponent implements OnInit {
  pridetiVisible = false;

  @ViewChild("inputName", {static:false}) inputN: ElementRef;
  @ViewChild("inputSurname", {static:false}) inputS: ElementRef;
  @Input() students;
  @Input() groupName;
  @Input() groupLocation;
  @Output() dalyvaujaEmitter = new EventEmitter<{name:string, surname:string, groupName: string, groupLocation: string}>();
  @Output() nedalyvaujaEmitter = new EventEmitter<{name:string, surname:string, groupName: string, groupLocation: string}>();
  @Output() arDalyvaujaEmitter = new EventEmitter<{dalyvauja: boolean, name:string, surname:string, groupName: string, groupLocation: string}>();

  
  constructor() { }

  ngOnInit(): void {
  }

  // dalyvauja(name: string, surname:string, index: number, groupName: string, groupLocation: string){
  //   console.log("Dalyvis", name, surname);
  //   this.students.splice(index, 1); 
  //   this.dalyvaujaEmitter.emit({name:name, surname:surname, groupName: groupName, groupLocation: groupLocation});
  // }

  //   nedalyvauja(name: string, surname:string, index: number, groupName: string, groupLocation: string){
  //   console.log("Nedalyvis", name, surname);
  //   this.students.splice(index, 1); 
  //   this.nedalyvaujaEmitter.emit({name:name, surname:surname, groupName: groupName, groupLocation: groupLocation});
  // }

  arDalyvauja(event, name: string, surname:string, index: number, groupName: string, groupLocation: string){
    let dalyvauja: boolean;
    if(event.target.id === "dal"){
      dalyvauja = true;
    } else {
      dalyvauja = false;
    }
    console.log("Dalyvis", name, surname, "dalyvauja = ", dalyvauja);
    this.students.splice(index, 1); 
    this.arDalyvaujaEmitter.emit({dalyvauja: dalyvauja, name:name, surname:surname, groupName: groupName, groupLocation: groupLocation});
  }

  addStudent(){
    // console.log(this.inputN.nativeElement);
    // console.log(this.inputS);
    if(this.inputN.nativeElement.value.trim() !="" && this.inputS.nativeElement.value.trim() !="")
    this.students.push ({
      name:this.inputN.nativeElement.value,
      surname: this.inputS.nativeElement.value
    });
    this.inputN.nativeElement.value = "";
    this.inputS.nativeElement.value= "";
  }



  

}
