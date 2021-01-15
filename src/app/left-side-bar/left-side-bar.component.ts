import { Component, OnInit } from "@angular/core";
import * as menubar from "./menu-bar.json";

@Component({
  selector: "app-left-side-bar",
  templateUrl: "./left-side-bar.component.html",
  styleUrls: ["./left-side-bar.component.css"]
})
export class LeftSideBarComponent {
  _menubar = {};

  constructor() {}

  ngOnInit() {
    this._menubar = menubar;
  }
}
