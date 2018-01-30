/* global PipefyApp, emojis */
document.addEventListener("DOMContentLoaded", function(event) {

    console.log('##START##');
    var Promise = PipefyApp.Promise;
    console.log('###create card#');
    PipefyApp.initCall({
      /*
      'card-badges': function(p, context) {
        return [
          {
            live: function(p, context) {
              return new Promise(function(resolve) {
                p.get('card', 'public', 'emoji').then(function(emoji){
                  if (emoji) {
                    resolve({
                      text: emoji,
                      refreshInterval: 20,
                      color: ['green', 'red', 'yellow', 'blue', null][Math.floor(Math.random() * 5)],
                      title: "Using this emoji: " + emoji,
                    })
                  } else {
                    resolve(null);
                  }
                });
              });
            }
          },
          {
            text: context.card.current_phase.name,
            icon: 'https://cdn.glitch.com/03813ab1-4482-45be-b7f7-74e8948d7ae7%2Ficon-gray.svg?1505743926910',
            title: 'Sample fixed badge',
          }
        ]
      },*/
      
      'card-tab': function(p, pipe) {
         return {
           icon: './images/icon_grande.svg',
           title: 'Informações Alteração de Pgto',
           url: './card-tab.html',
           claimedAttachments: function(attachments) {
             // Iterate by all attachment to claim attachments from Emojipedia
             return 2;
           },
           buttons: [
             /*{
               text: '🔥 Add Emoji',
               callback: function(p) {
                   alert("salvar");
               }
             },*/
           ]
         }
      }

    });

});