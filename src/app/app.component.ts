import {MediaMatcher} from '@angular/cdk/layout';
import { Component} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Latest';
  mode = "side";
  menus = [
    "Latest",
    "Operating System",
    "Software Development",
    "Java",
    "Node",
    "Python",
    "Others"
  ];
  
  articles: any;
  model: string;

  constructor(private http:Http) {
    this.http.get('assets/data/article.json').subscribe(
        res => { 
          this.articles = res.json()
          console.log(this.articles)
        }
      );
  }

  ngOnInit() {
    this.model = `# header `;
  }

  clickMenu(submenu: string) {
    this.title = submenu
  }

  editorUpdate() {
  }

}
