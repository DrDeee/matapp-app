export default {
  apiHost: process.env.API_HOST || 'http://localhost:4000',
  keycloakInstance:
    process.env.KC_INSTANCE || 'auth.messenger.fridaysforfuture.dev',
  keycloakRealm: process.env.KC_REALM || 'mat',
  keycloakClient: process.env.KC_CLIENT || 'mat-app',
}
