import { Component } from "@angular/core";
import { GitHubService } from "./service/github.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-poc';
  commitList = [];
  showSpinner: Boolean = false;
  username: String = "anshumansworld";
  repo: String = "github-example-app";

  constructor(private gitHubService: GitHubService) {}

  getRepoCommit() {
    this.showSpinner = true;
    this.gitHubService.getRepoCommit(this.username, this.repo).subscribe(
      res => {
        this.showSpinner = false;
        this.commitList = res.body;
      },
      err => {
        this.showSpinner = false;
        this.commitList = []
      }
    );
  }
}
