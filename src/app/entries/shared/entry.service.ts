import { Injectable } from '@angular/core'
import { Entry } from './entry.model'
import { Http } from '@angular/http'


@Injectable()

export class EntryService {
  constructor(private http: Http){

  }
  getEntries(): Promise<Entry[]> { 
    return this.http.get('/app/entries')
            .toPromise()
            .then(res => res.json().data as Entry[])
  }
}