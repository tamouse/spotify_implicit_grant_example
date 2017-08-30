# Spotify Implicit Grant Example

A sample React app showing Spotify Implicit Grant Flow handling using a pop-up window.

The login is done to Spotify before any rendering of the application. If the login fails or times out, an Error is displayed.
Otherwise, the credentials are passed to the Application.

## Using a pop-up window

The login uses a pop-up window instead of changing the main window's location and bouncing back.
This will require pop-ups to be allowed for the app.

Given this is running before any React components get rendered, it might be okay to do the location changing trick without
the pop-up window, too.
