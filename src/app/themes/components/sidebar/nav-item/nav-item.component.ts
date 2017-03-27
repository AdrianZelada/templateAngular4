/**
 * Created by iZel on 3/27/17.
 */
import { Component, Input} from '@angular/core';

@Component({
  selector:'[zt-nav-item]',
  // selector:'zt-nav-item',
  templateUrl:'./nav-item.html'
})

export class ztNavItem{
  @Input('menu') menuItem :any;
  @Input() collap :boolean;
  mouseLeave=true;
  constructor(){

  }
}
