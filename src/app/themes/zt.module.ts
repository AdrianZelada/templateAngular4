/**
 * Created by iZel on 3/26/17.
 */
import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ztComponents} from './components'


@NgModule({
  declarations:[ztComponents],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ztComponents]
})

export class ztModule{

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ztModule,
      providers: [],
    };
  }
  constructor(){}
}
