import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
  <div appChangeEditorOptions>
    <ckeditor
      [(ngModel)]="content"
      [config]="config"
      [readonly]="false"
      debounce="500">
    </ckeditor>
  </div>
  `,
})
export class EditorComponent {
  content = '<p>Some html</p>';
config: any = {
    allowedContent: true,
    toolbar: [[
      'Heading',
      'Bold',
       'Italic',
       'Underline',
       '-',
       'NumberedList',
       'BulletedList',
       'Link',
        '-',
        'CreatePlaceholder',
        'Undo',
        'Redo',
        'Language'
        ]],
    removePlugins: 'elementspath',
    resize_enabled: false,
    extraPlugins: 'font,divarea,placeholder',
    contentsCss: ['body {font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;}'],
    autoParagraph: false,
    enterMode: 2
  };
}
