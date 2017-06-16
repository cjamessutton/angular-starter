import {
  Component,
  OnInit
} from '@angular/core';

import { MaterialModule } from '@angular/material';

import { NumPadState } from './numpad.service';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'numpad'.
   */
  selector: 'simple-numpad',  // <numpad></numpad>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './numpad.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './numpad.component.html'
})
export class NumPadComponent implements OnInit {
  /**
   * Set our default values
   */
  public numPadLocalState = {};
  /**
   * TypeScript public modifiers
   */
  constructor(
    public numPadState: NumPadState
  ) {}

  public ngOnInit() {
    this.numPadLocalState = this.numPadState.state;
    console.log('hello `NumPad` component');
  }
  
  
}
