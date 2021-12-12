import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RequestOption } from '../models/app.models';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {

  constructor(
    private httpClient: HttpClient,
  ) {}

    // wrapper to call the http methods
  public request<T>(requestOption: RequestOption): Observable<T> {
    return this.httpClient
      .request<T>(requestOption.method, requestOption.url, {
        headers: requestOption.headers,
        body: requestOption.body,
        params: requestOption.params,
        observe: "response",
        responseType: requestOption.isblob
          ? ("blob" as "json")
          : ("text" as "json"),
      })
      .pipe(
        map((data: any) => {
          const body = data.body;
          if (body) {
            if (typeof body == "string") {
              try {
                data.body = JSON.parse(body);
              } catch (e) {
                data.body = body;
              }
            }
            return data as T;
          } else {
            this.handleError(data, requestOption.isBluk);
            return '' as any;
          }
        }),
        catchError((data) => {
          this.handleError(data, requestOption.isBluk);
          throw  throwError(data.error);
        })
      );
  }
  


  private handleError = async (data, isBluk): Promise<Observable<any[]>> => {
    let errorMessage;
    if (data.status != 200) {
      errorMessage = data.error.message;
    } else {
      errorMessage = data.error;
    }

    throw errorMessage;
  };
}
