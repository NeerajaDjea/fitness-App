// Client ID and API key from the Developer Console
var CLIENT_ID = '221726329468-vltjuh7e0j667gi0vi9kvtkpsc091jdp.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCf3cD-4d31Q_FqTwsz2BWT0-OWsMqoHLQ';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
window.handleClientLoad = function() {
    window.gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function() {
        // Listen for sign-in state changes.
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;



        loadCalendar();
    }, function(error) {
        appendPre(JSON.stringify(error, null, 2));
    });
}


/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        listUpcomingEvents();
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    window.gapi.auth2.getAuthInstance().signIn();
    console.log(event)
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    window.gapi.auth2.getAuthInstance().signOut();
    console.log(event)
}

function loadCalendar() {
    var profile = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    var email = profile.getEmail();
    var encodedEmail = encodeURIComponent(email);
    var url = `https://calendar.google.com/calendar/embed?src=${encodedEmail}&ctz=Europe%2FLondon`;


    console.log('the iframe was added');
    var iframe = document.createElement("iframe");
    iframe.setAttribute('src', url);
    iframe.setAttribute('style', "border: 0");
    iframe.setAttribute("height", "600");
    iframe.setAttribute("width", "1000");
    console.log(iframe);
    var cal = document.getElementById("calendarHolder");
    cal.innerHTML = " ";
    cal.appendChild(iframe);
    listUpcomingEvents();
}
/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
    window.gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    }).then(function(response) {
        document.getElementById('content').innerHTML = "";
        var events = response.result.items;
        appendPre('Upcoming events:');

        if (events.length > 0) {
            for (var i = 0; i < events.length; i++) {
                var event = events[i];
                var when = event.start.dateTime;
                if (!when) {
                    when = event.start.date;
                }
                appendPre(event.summary + ' (' + when + ')')
            }
        } else {
            appendPre('No upcoming events found.');
        }
    });
}

function addNewEvent(eventTitle) {
    if (!eventTitle) {
        return
    }
    var event = {
        'summary': eventTitle,
        'location': '800 Howard St., San Francisco, CA 94103',
        'description': 'A chance to hear more about Google\'s developer products.',
        'start': {
            'dateTime': '2020-01-27T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'end': {
            'dateTime': '2020-01-27T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'reminders': {
            'useDefault': false,
            'overrides': [
                { 'method': 'email', 'minutes': 24 * 60 },
                { 'method': 'popup', 'minutes': 10 }
            ]
        }
    };
    var request = window.gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    })
    request.execute(function() {
        loadCalendar();
    })
}

addNewEvent(false);
// 
// url encode the email
//