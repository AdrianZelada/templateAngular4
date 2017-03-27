import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app : any ={};
  menus:any[];
  constructor(){
    this.app={
      title:'Zt-Dash'
    };
    this.menus=[
      {
        path:'/',
        icon:'fa fa-home',
        label:'Dashboard',
      },
      {
        path:'/',
        icon:'fa fa-th-large',
        label:'Items Manager',
        children:[
          {
            path:'/',
            icon:'fa fa-home',
            label:'Item1',
          },
          {
            path:'/',
            icon:'fa fa-bar-chart',
            label:'Item2',
          },
        ]
      },

    ]
  }
}
