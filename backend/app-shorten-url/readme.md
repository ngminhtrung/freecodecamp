This application is an exercise in section "Back-end", freeCodeCamp platform.
- **Name of application**: URL Shortener Microservice
- **Description**:
    - User can pass a URL as a parameter, then receive a shortened URL in the JSON response.
    - If User passes an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
    - When User visits that shortened URL, it will redirect to her/his original link.
- **Example**:
    - User enters: `http://localhost:3000/new/http://vnreview.vn/`
    - The browser returns:
        ```js
        {"originalURL":"http://vnreview.vn/","shortendURL":"http://localhost:3000/rycRf-i8f"}
        ```
    - User enters into browser again: `http://localhost:3000/rycRf-i8f`
    - The browser redirects to `http://vnreview.vn/`
- Link to glitch.me: