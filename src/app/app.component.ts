import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ChromeExtensionTemplate';
  ngOnInit(): void {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.body.style.backgroundColor = "' + 'red' + '";' }
      );
    });
    
  }
}
