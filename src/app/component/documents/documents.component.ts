import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  @Input() documents: any;
  
  constructor() { }

  ngOnInit() {
  }

}
