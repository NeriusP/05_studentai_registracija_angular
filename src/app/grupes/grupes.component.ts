import { Component, OnInit } from '@angular/core';
import { grupesData } from './grupes.data';

@Component({
  selector: 'app-grupes',
  templateUrl: './grupes.component.html',
  styleUrls: ['./grupes.component.css']
})
export class GrupesComponent implements OnInit {
  pridetiVisible = false;
  grupesData = grupesData;
  dalyvaujantys = [];
  nedalyvaujantys = [];
  constructor() { }

  ngOnInit(): void {
  }

  dalyvReg(dalyvaujantis: {name:string, surname:string}){
    this.dalyvaujantys.push(dalyvaujantis);
  }

  nedalyvReg(nedalyvaujantis: {name:string, surname:string}){
    this.nedalyvaujantys.push(nedalyvaujantis);
  }

  dalyviuRusiavimas(dalyvis: {dalyvauja: boolean, name:string, surname:string}){
    if(dalyvis.dalyvauja){
      this.dalyvaujantys.push(dalyvis);
    } else {
      this.nedalyvaujantys.push(dalyvis);
    }
  }

  addGroup(groupName: HTMLInputElement, groupCity: HTMLInputElement, groupStarttime: HTMLInputElement){
    if(groupName.value != "" && groupCity.value != "" && groupStarttime.value != "")
    grupesData.push({
      group : groupName.value,
      location: groupCity.value,
      start_date: groupStarttime.value,
      students: []
    })
    groupName.value = "";
    groupCity.value = "";
    groupStarttime.value = "";
  }
}
