import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const collapsibles1 = this.elementRef.nativeElement.querySelectorAll('.question-right');
    collapsibles1.forEach((question: { classList: { toggle: (arg0: string) => void; }; nextElementSibling: any; }) => {
      this.renderer.listen(question, 'click', () => {
        question.classList.toggle('active');
        const content = question.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    const collapsibles2 = this.elementRef.nativeElement.querySelectorAll('.question-left');
    collapsibles2.forEach((question: { classList: { toggle: (arg0: string) => void; }; nextElementSibling: any; }) => {
      this.renderer.listen(question, 'click', () => {
        question.classList.toggle('active');
        const content = question.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }
}


