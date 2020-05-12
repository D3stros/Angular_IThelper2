import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  private _serviceUrl = "/api/services";

  constructor(private http: HttpClient) {}

  getServices() {
    return this.http.get<any>(this._serviceUrl);
  }
}
