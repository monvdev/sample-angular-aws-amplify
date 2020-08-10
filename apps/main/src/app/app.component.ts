import { Component } from '@angular/core';
import Predictions from '@aws-amplify/predictions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AWS Services Example';
  fileSelectError: string;
  resultError: string;
  keyValues: Array<{ key: string; value: string }> = [];
  textSources = [
    { text: 'Words', value: 'w' },
    { text: 'Form - Key Values', value: 'f' },
  ];
  selectedTextSource = 'w';
  enableIdentify = false;
  selectedFile;
  hasResult = false;
  words: Array<string> = [];
  isBusy = false;

  constructor() {}

  textSourceClicked(textSource): void {
    this.selectedTextSource = textSource.value;
  }

  identifyText(): void {
    this.resultError = undefined;
    this.hasResult = false;
    this.isBusy = true;
    Predictions.identify({
      text: { source: { file: this.selectedFile }, format: 'FORM' },
    })
      .then((result) => {
        if (result.text) {
          if (result.text.words && result.text.words.length > 0) {
            this.words = result.text.words.map((w) => w.text);
          }
          if (result.text.keyValues && result.text.keyValues.length > 0) {
            this.keyValues = result.text.keyValues.map((kv) => ({
              key: kv.key,
              value: kv.value.text || '',
            }));
          }
          this.hasResult = true;
          this.isBusy = false;
        }
      })
      .catch((err) => {
        console.log(err);
        this.resultError = 'There was an error. Please try again later.';
        this.isBusy = false;
      });
  }

  fileChange(event): void {
    this.keyValues = [];
    this.hasResult = false;
    this.resultError = undefined;
    this.fileSelectError = undefined;
    this.selectedFile = undefined;

    const files = event.target.files;
    if (!files || files.length <= 0) {
      this.fileSelectError = 'No file selected';
      return;
    }
    if (files[0].size > 1048576) {
      this.fileSelectError = 'File size is greater than 1MB';
      return;
    }
    const name = files[0].name.toLowerCase();
    if (
      !(
        name.indexOf('.png') === name.length - 4 ||
        name.indexOf('.jpg') === name.length - 4
      )
    ) {
      this.fileSelectError = 'Only .png, .jpg or .pdf files are allowed';
      return;
    }

    console.dir(files[0]);
    this.selectedFile = files[0];
  }
}
