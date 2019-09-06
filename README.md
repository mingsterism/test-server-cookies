## This repo is a test playground for cookies. 
There is a vue app that makes GET and POST requests to an express server

The express server has settings used to test for cookies. 

## Status
1) Current cookies are able to be set with persistence (ensure that app url is 127.0.0.1:8080 and not localhost:8080). persistence does not work if localhost. 
2) Server receives cookies and able to read it
3) App able to receive it and is persistent throughout tabs and refresh

## Todo
1) ensure that cookies are signed and secure

## Important Resources
- [getting cookies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/get)
- [understand cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)