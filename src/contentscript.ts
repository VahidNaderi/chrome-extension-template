import * as $ from 'jquery';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
$(document).find('body').css('background-color', 'red');

alert('content script is running');

window.onload = function (){
    alert('window loadded.')
};