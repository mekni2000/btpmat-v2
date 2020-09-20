import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationsComponent } from './translations.component';
import { TranslatePipe } from './shared/translate.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from './shared/translate.service';




@NgModule({
  declarations: [TranslationsComponent, TranslatePipe],
  exports:[TranslatePipe],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: [TranslateService]
})
export class TranslationsModule { }
