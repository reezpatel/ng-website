import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-extras',
  templateUrl: './home-extras.component.html',
  styleUrls: ['./home-extras.component.css']
})
export class HomeExtrasComponent implements OnInit {
  tableData: {name: string, value: string | number} [] = [
    {name: 'Age', value: '20'},
    {name: 'Current Location', value: 'Chennai, TN, India'},
    {name: 'Address', value:  'M-8, Jeevan Vihar, Raipur, CG, India'},
    {name: 'email', value: 'reezpatel@gmail.com'},
    {name: 'contact', value: '+91 8085 474 140'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
