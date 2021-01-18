import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/models/application';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  applications: Application[] = []

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // load data based on type
    console.log(this.route.snapshot.paramMap.get("type"))
  }

  startApplication() {
    console.log("sup")
    this.router.navigate(['/start-application'])
  }

  generateDocs() {}

  viewDocs() {}

  editApplication() {}

}
