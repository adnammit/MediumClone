import { OktaAuth } from '@okta/okta-auth-js'
import config from '@/config.json';

export const oktaAuth = new OktaAuth({
	issuer: config.authClient,
	clientId: config.clientId,
	redirectUri: config.redirectUrl,
	scopes: ['openid', 'profile', 'email'],
})
