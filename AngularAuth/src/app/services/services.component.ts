import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit {
  services = [];

  constructor(
    private _serviceService: ServicesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._serviceService.getServices().subscribe(
      res => (this.services = res),
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(["/login"]);
          }
        }
      }
    );
  }
}
