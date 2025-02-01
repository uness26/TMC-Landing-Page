import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistributionComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    const collapsibles1 = this.elementRef.nativeElement.querySelectorAll('.collapsible-left');
    collapsibles1.forEach((question: { classList: { toggle: (arg0: string) => void; }; nextElementSibling: any; }) => {
      this.renderer.listen(question, 'click', () => {
        question.classList.toggle('active');
        const content = question.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    const collapsibles2 = this.elementRef.nativeElement.querySelectorAll('.collapsible-right');
    collapsibles2.forEach((question: { classList: { toggle: (arg0: string) => void; }; nextElementSibling: any; }) => {
      this.renderer.listen(question, 'click', () => {
        question.classList.toggle('active');
        const content = question.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });


  }

}
