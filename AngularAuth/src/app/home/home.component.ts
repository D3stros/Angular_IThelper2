import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

import {
  faAngular,
  faVuejs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  faAngular = faAngular;
  faVuejs = faVuejs;
  faReact = faReact;

  constructor(public _authService: AuthService) {}

  ngOnInit(): void {}
}
