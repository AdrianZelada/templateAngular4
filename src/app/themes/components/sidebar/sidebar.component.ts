/**
 * Created by iZel on 3/26/17.
 */
import {Component, Input} from '@angular/core';

@Component({
  selector:'zt-sidebar',
  templateUrl:'./sidebar.html'
})

export class ztSidebarComponent{
  @Input() app:any;
  @Input() menus:any[];
  controlClass:number=0;
  constructor(){

  }


}
