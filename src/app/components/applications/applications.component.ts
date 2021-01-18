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
    let app = new Application
    app.id = "1"
    app.applicationName = "will 1"
    app.applicationType = "Grant of Admin"
    this.applications.push(app)
  }

  startApplication() {
    this.router.navigate(['/start-application'])
  }

  generateDocs() {}

  viewDocs(applicationId: string) {
    this.router.navigate([`documents/${applicationId}`])
  }

  editApplication() {}

}
