import { Directive } from '@angular/core';

declare const CKEDITOR: any;

@Directive({
  selector: '[appChangeEditorOptions]'
})
export class ChangeEditorOptionsDirective {
   constructor() {
     CKEDITOR.on(
      'instanceReady',
      (ev) => {
         // tslint:disable-next-line: one-variable-per-declaration
         const $script = document.createElement('script'),
         // tslint:disable-next-line: variable-name
         $editor_instance = CKEDITOR.instances[ev.editor.name];
         $script.src = 'https://cdn.ckeditor.com/4.5.11/full-all/ckeditor.js';
         $script.onload = () => {
           //run code after load
         }
         $editor_instance.document.getHead().$.appendChild($script);
      }
    );

     CKEDITOR.on('dialogDefinition', (event) => {
      if ('placeholder' === event.data.name) {
        const input = event.data.definition.getContents('info').get('name');
        const dialog = event.data.definition;
        input.type = 'select';
        input.items = [
          ['First Name', 'first_name'],
          ['Last Name', 'last_name'],
          ['Link', 'link'],
          ['test', 'test'],
        ];
      }
    });
  }
}
