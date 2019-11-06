import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditorComponent } from './sample/sample.component';
import { ChangeEditorOptionsDirective } from './sample/change-editor-options.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ChangeEditorOptionsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
