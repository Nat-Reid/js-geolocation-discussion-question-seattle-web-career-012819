# Using JavaScript and HTML5 for Geolocation

Have you ever gone to a website and seen a pop-up asking you to allow the site to access your location?  In HTML5, using IP information and a little Javascript, it is possible to get latitude and longitude coordinates of a user.  This is how the browser version of Google Maps can center on your location when it loads, and with a couple of functions added to your project's JavaScript, you can use this information too!

1) Check out these resources and see if you can render up your current location in the browser:

- https://www.w3schools.com/html/html5_geolocation.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation

For this discussion question, there isn't any HTML template to work with, but feel free to create your own or use your browser console to get the results.  

2) Once you have the latitude and longitude returned, try to solve the following challenges programmatically:

[40.779437,-73.963244],[40.738527,-74.005363],[40.729975,-73.980926]
- The array of coordinates above are the locations of your friends, find the:
  - Closest friend relative to your position
  - Farthest friend
  - The center point of all coordinates averaged (along with your current position), i.e. a central meeting place to meet.
