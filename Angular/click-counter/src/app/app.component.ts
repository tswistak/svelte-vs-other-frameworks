import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent {
  clicks = 0;

  increment() {
    this.clicks++;
  }

  decrement() {
    this.clicks--;
  }
}
