import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent {
  editorContent: string = '';
  sanitizedContent: SafeHtml | null = null;
  
  constructor(private sanitizer: DomSanitizer) {}

  updateContent() {
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.editorContent);
  }
}
