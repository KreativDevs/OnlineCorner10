(function(){
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "330024e3-3fe1-4fd2-8d2b-3e25c9288da5",
      safari_web_id: "web.onesignal.auto.59acb98d-1515-493b-98a5-7443c569eebc",
      notifyButton: {
        enable: true, /* Required to use the Subscription Bell */
      /* SUBSCRIPTION BELL CUSTOMIZATIONS START HERE */
        size: 'medium', /* One of 'small', 'medium', or 'large' */
        theme: 'default', /* One of 'default' (red-white) or 'inverse" (white-red) */
        position: 'bottom-right', /* Either 'bottom-left' or 'bottom-right' */
        offset: {
            bottom: '0px',
            left: '0px', /* Only applied if bottom-left */
            right: '0px' /* Only applied if bottom-right */
        },
        showCredit: false, /* Hide the OneSignal logo */
        text: {
            'tip.state.unsubscribed': 'Subscribe to notifications',
            'tip.state.subscribed': "You're subscribed to notifications",
            'tip.state.blocked': "You've blocked notifications",
            'message.prenotify': 'Click to subscribe to notifications',
            'message.action.subscribed': "Thanks for subscribing!",
            'message.action.resubscribed': "You're subscribed to notifications",
            'message.action.unsubscribed': "You won't receive notifications again",
            'dialog.main.title': 'Manage Site Notifications',
            'dialog.main.button.subscribe': 'SUBSCRIBE',
            'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
            'dialog.blocked.title': 'Unblock Notifications',
            'dialog.blocked.message': "Follow these instructions to allow notifications:"
        },
        colors: { // Customize the colors of the main button and dialog popup button
           'circle.background': 'rgb(84,110,123)',
           'circle.foreground': 'white',
           'badge.background': 'rgb(84,110,123)',
           'badge.foreground': 'white',
           'badge.bordercolor': 'white',
           'pulse.color': 'white',
           'dialog.button.background.hovering': 'rgb(77, 101, 113)',
           'dialog.button.background.active': 'rgb(70, 92, 103)',
           'dialog.button.background': 'rgb(84,110,123)',
           'dialog.button.foreground': 'white'
         },
        /* HIDE SUBSCRIPTION BELL WHEN USER SUBSCRIBED */
        displayPredicate: function() {
            return OneSignal.isPushNotificationsEnabled()
                .then(function(isPushEnabled) {
                    return !isPushEnabled;
                });
        }
      },
      promptOptions: {
        slidedown: {
          prompts: [
            {
              type: "category",
              autoPrompt: true,
              text: {
                actionMessage: "We'd like to show you notifications for the latest news and updates.",
                acceptButton: "Allow",
                cancelButton: "Cancel",
  
                /* CATEGORY SLIDEDOWN SPECIFIC TEXT */
                negativeUpdateButton:"Cancel",
                positiveUpdateButton:"Save Preferences",
                updateMessage: "Update your push notification subscription preferences.",
              },
              delay: {
                pageViews: 1,
                timeDelay: 20
              },
              categories: [
                {
                  tag: "politics",
                  label: "Politics"
                },
                {
                  tag: "usa_news",
                  label: "USA News"
                },
                {
                  tag: "world_news",
                  label: "World News",
                },
                {
                  tag: "culture",
                  label: "Culture"
                },
              ]
            }
          ]
        }
      }
    });
  })});