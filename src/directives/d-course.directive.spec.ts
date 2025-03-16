import { DCourseDirective } from './d-course.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('DCourseDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(null);
    const renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
    const directive = new DCourseDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
