import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { AppComponent } from './app.component'
import { EntryListComponent, EntryComponent, EntryService } from './entries'
import { InMemoryEntryService } from './backend'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryEntryService),
    FormsModule
  ],
  providers: [ EntryService ],
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}