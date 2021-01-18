import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';

@Component({
  selector: 'app-generated-documents',
  templateUrl: './generated-documents.component.html',
  styleUrls: ['./generated-documents.component.css']
})
export class GeneratedDocumentsComponent implements OnInit {

  documents: Document[] = []

  constructor() { }

  ngOnInit(): void {
  }

  download(document: Document) {
    // download document as PDF from some blob store to clients device
  }

}
