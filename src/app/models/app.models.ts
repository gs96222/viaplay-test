import { HttpHeaders } from '@angular/common/http';

export interface RequestOption {
  method: string;
  url: string;
  headers?: HttpHeaders;
  body?: any;
  params?: any;
  isblob?: boolean;
  isBluk?: boolean;
}
