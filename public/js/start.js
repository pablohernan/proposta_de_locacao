/* global PipefyApp, emojis */
console.log('not load');
document.addEventListener("DOMContentLoaded", function(event) {

    console.log('##START##');
    var Promise = PipefyApp.Promise;
    console.log('##create card##');

PipefyApp.initCall({
  'pipe-buttons': function(p, pipe) {
        p.modal({
          url: 'popup.html',
          height: '90%',
          width: '90%',
        });
  }
});




});