import { NgModule } from '@angular/core';

import { GolfHipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GolfHipsterSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GolfHipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GolfHipsterSharedCommonModule {}
