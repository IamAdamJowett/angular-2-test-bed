import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ MainNavComponent ],
  exports: [ MainNavComponent, CommonModule ]
})

export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        };
    }
}
