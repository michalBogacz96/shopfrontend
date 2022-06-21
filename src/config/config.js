export const config = {
    "apiUrl": 'http://localhost:8080'
};

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
export const GOOGLE_AUTH_URL = config.apiUrl + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
