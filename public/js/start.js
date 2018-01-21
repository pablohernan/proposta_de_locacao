/* global PipefyApp, emojis */

var Promise = PipefyApp.Promise;

var openModal = function(p) {
  p.modal({
    url: './modal.html',
    height: '70%',
    width: '70%',
  });
  
  p.closeDropdown();
};

var openSidebar = function(p) {
  p.sidebar({
    title: 'Sidebar with Flags',
    url: './sidebar.html',
  });
  
  
  p.closeDropdown();
};

var openEmojiDropdown = function(p) {
  p.dropdown({
    title: 'Select Card Emoji',
    url: './set-emoji.html',
    height: '500px',
  });
}

var openCardDropdown = function(p) {
  p.dropdown({
    title: 'Emoji app',
    items: [
      {
        title: '😈  Set Card Emoji',
        callback: openEmojiDropdown,
      },
      {
        title: '😎  Open Modal',
        callback: openModal,
      },
      {
        title: '👋  Close card',
        callback: function(p) { p.closeCard() },
      },
    ]
  });
};

var transformToSearchItem = function(emoji) {
  var title = emoji.name + " " + emoji.emoji;
  return {
    title: title,
    callback: function(p) {
      p.attach({
        url: emoji.url,
        name: title,
      }).then(function(){
        p.closeDropdown();
      });
    }
  }
}

var attachRandomEmoji = function(p) {
  var emoji = window.emojis_urls[Math.floor(Math.random() * window.emojis_urls.length)];
  
  p.attach({
    url: emoji.url,
    name: emoji.name + " " + emoji.emoji,
  }).then(function(){
    p.closeDropdown();
  })
};

var searchEmoji = function(p) {
  p.search({
    title: 'Select Emoji',
    placeholder: 'Search Emoji',
    empty: 'No Emoji found',
    loading: 'Looking for Emoji...',
    items: function(p, query) {
      return new Promise(function(resolve) {
        if (query && query.length) {
          var filteredEmojis = window.emojis_urls.filter(function(emoji) {
            return emoji.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
          });
          
          resolve(filteredEmojis.map(transformToSearchItem));
        } else {
          resolve(window.emojis_urls.map(transformToSearchItem));
        }
      });
    },
  });
};

PipefyApp.initCall({
  'card-buttons': function(p, pipe) {
    return [
      {
        icon: 'https://cdn.glitch.com/03813ab1-4482-45be-b7f7-74e8948d7ae7%2Ficon-blue.svg?1505357332379',
        text: 'Card button',
        callback: openCardDropdown,
      }
    ];
  },
  
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
  },
  
  'card-tab': function(p, pipe) {
     return {
       icon: 'https://cdn.glitch.com/03813ab1-4482-45be-b7f7-74e8948d7ae7%2Ficon-blue.svg?1505357332379',
       title: 'Card Tab',
       url: './card-tab.html',
       claimedAttachments: function(attachments) {
         // Iterate by all attachment to claim attachments from Emojipedia
         return attachments.filter(function(attachment){
           return attachment.url.indexOf("https://emojipedia.org") === 0;
         });
       },
       buttons: [
         {
           text: '🔥 Add Emoji',
           callback: function(p) {
             p.dropdown({
               title: 'Sample Tab button',
               items: [
                 {
                   title: '😈  Attach Random Emoji',
                   callback: attachRandomEmoji,
                 },
                 {
                   title: '🔍 Search and Attach',
                   callback: searchEmoji,
                 },
               ]
             });
           }
         },
       ]
     }
  },
  
  'pipe-buttons': function(p, pipe) {
    return [
      {
        icon: 'https://cdn.glitch.com/03813ab1-4482-45be-b7f7-74e8948d7ae7%2Ficon-white.svg?1505355257252',
        text: 'Emoji',
        callback: function(p) {
          p.dropdown({
            title: 'Emoji app',
            items: [
              {
                title: '🤔 Open flags Sidebar',
                callback: openSidebar,
              },
              {
                title: '🙈 Open emojis Modal',
                callback: openModal,
              },
              {
                title: '✅ Show success notification',
                callback: function(p) {
                  p.showNotification('🎉 Sample success notification', 'success');
                  p.closeDropdown();
                },
              },
              {
                title: '❌ Show error notification',
                callback: function(p) {
                  p.showNotification('😢 Sample error notification', 'error');
                  p.closeDropdown();
                },
              },
            ]
          })
        }
      },
      {
        icon: 'https://cdn.glitch.com/03813ab1-4482-45be-b7f7-74e8948d7ae7%2Femojipedia.svg?1505356197998',
        text: 'Emojipedia',
        url: 'https://emojipedia.org',
        target: 'blank'
      }
    ];
  }
});