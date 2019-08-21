import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GolfHipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GolfHipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GolfHipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GolfHipsterSharedModule {
  static forRoot() {
    return {
      ngModule: GolfHipsterSharedModule
    };
  }
}
