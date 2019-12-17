import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class GitHubService {
  constructor(private apiService: ApiService) {}

  getRepoCommit(username: String, repo: String) {
    return this.apiService.get(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );
  }
}
