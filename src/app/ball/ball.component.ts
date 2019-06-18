import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ball",
  templateUrl: "./ball.component.html",
  styleUrls: ["./ball.component.css"]
})
export class BallComponent implements OnInit {
  count = 0;
  resetflag = false;
  add() {
    this.count += 1;
  }

  reset() {
    this.count = 0;
  }

  constructor() {}

  ngOnInit() {}
}
