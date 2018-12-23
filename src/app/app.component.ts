import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';
  records = [];

  constructor(private dataService: RecordsService) { }

  ngOnInit() {
    this.records = this.dataService.getData();
  }
}
