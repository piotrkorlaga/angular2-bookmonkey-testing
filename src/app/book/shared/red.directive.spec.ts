/* tslint:disable:no-unused-variable */

import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RedDirective } from './red.directive';

@Component({
  selector: 'bm-blank-cmp',
  template: `<div bmRed>Content</div>`
})
class BlankComponent { }

describe('Directive: Red', () => {
  let fixture: ComponentFixture<BlankComponent>;
  let directive: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlankComponent,
        RedDirective
      ]
    });

    fixture = TestBed.createComponent(BlankComponent);
    directive = fixture.debugElement.queryAll(By.directive(RedDirective))[0];

    fixture.detectChanges();
  }));

  describe('Directive: Red', () => {
    it('should create an instance', async(() => {
      expect(directive).toBeDefined();
    }));

    it('shouldn\'t set a background if its not clicked', async(() => {
      expect(directive.styles['backgroundColor']).toBeUndefined();
    }));

    it('set a background if its clicked', async(() => {
      const el = directive.nativeElement as HTMLDivElement;
      expect(directive.styles['backgroundColor']).toBeUndefined();
      el.click();
      fixture.detectChanges();
      expect(directive.styles['backgroundColor']).toBe('red');
      el.click();
      fixture.detectChanges();
      expect(directive.styles['backgroundColor']).toBe('');
      el.click();
      fixture.detectChanges();
      expect(directive.styles['backgroundColor']).toBe('red');
    }));

  });
});
