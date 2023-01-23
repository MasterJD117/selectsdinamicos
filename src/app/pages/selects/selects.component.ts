import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {

  options: any []= [
    {
      id: 1,
      name: 'Option 1'
    },
    {
      id: 2,
      name: 'Option 2'
    },
    {
      id: 3,
      name: 'Option 3'
    },
    {
      id: 4,
      name: 'Option 4'
    },
    {
      id: 5,
      name: 'Option 5'
    }
  ]
  options2: any []= [
    {
      idop2: 1,
      namev2: 'x 1'
    },
    {
      idop2: 2,
      namev2: 'x 2'
    },
    {
      idop2: 3,
      namev2: 'x 3'
    },
    {
      idop2: 4,
      namev2: 'x 4'
    },
    {
      idop2: 5,
      namev2: 'x 5'
    }
  ]

  selectedArr: any[] = [];

  modelOptions: any;
  modelOptions2:any;


  constructor() { }

  ngOnInit(): void {

  }

  select(option: any, option2: any) {
    let selected = {option,option2};
    console.log(selected);

    this.selectedArr.push(selected);
    console.log('selectedArr:',this.selectedArr);

  }

  agregar(){
    console.log('op1',this.modelOptions);
    console.log('op2',this.modelOptions2);

   this.select(this.modelOptions,this.modelOptions2);
  }



}
