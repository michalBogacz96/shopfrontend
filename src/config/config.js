export const config = {
    // "apiUrl": 'http://localhost:8080'
    "apiUrl": 'https://backendebiznes.azurewebsites.net/'
};

// export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
export const OAUTH2_REDIRECT_URI = 'https://frontebiznes.azurewebsites.net/oauth2/redirect'
export const GOOGLE_AUTH_URL = config.apiUrl + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = config.apiUrl + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
