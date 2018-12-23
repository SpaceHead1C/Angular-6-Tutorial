import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor);

  /* Store the original function in a variable
   * do some manipulations with `desccriptor.value`
   * return the descriptor
   */
  const original = descriptor.value;
  descriptor.value = function() {
    console.log('This function was hacked!');
  }

  return descriptor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  constructor() {
    this.simpleMethod();
  }

  @log
  simpleMethod() {
    console.log('Hey there!');
  }
}
