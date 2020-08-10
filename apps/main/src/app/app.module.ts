import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AmplifyUIAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
