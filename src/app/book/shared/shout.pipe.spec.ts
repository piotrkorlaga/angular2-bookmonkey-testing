/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ShoutPipe } from './shout.pipe';

describe('Pipe: Shout', () => {
  it('create an instance', () => {
    let pipe = new ShoutPipe();
    expect(pipe).toBeTruthy();
  });

  it('adds "!!!" as default suffix', () => {
    let pipe = new ShoutPipe();
    expect(pipe.transform('test')).toBe('TEST!!!');
  });

  it('adds custom suffix', () => {
    let pipe = new ShoutPipe();
    expect(pipe.transform('test', '!!!!!')).toBe('TEST!!!!!');
  });

  it('returns null if not string or empty string', () => {
    let pipe = new ShoutPipe();
    expect(pipe.transform('', '!!!!!')).toBe(null);
    expect(pipe.transform(1, '!!!!!')).toBe(null);
  });
});
