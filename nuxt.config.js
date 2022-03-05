import config from './config'

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'MAT App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/scss/theme.scss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],
  modules: [
    'nuxt-buefy',
    'nuxt-fontawesome',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],
  axios: {
    baseURL: config.apiHost + '/api/v1',
  },

  pwa: {
    manifest: {
      lang: 'de',
    },
  },
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon',
  },
  build: {},
  router: {
    middleware: ['auth'],
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faAngleLeft',
          'faAngleRight',
          'faArrowLeft',
          'faBan',
          'faCheck',
          'faChevronDown',
          'faChevronUp',
          'faEdit',
          'faFilter',
          'faLink',
          'faMessage',
          'faMinus',
          'faPlus',
          'faTrash',
          'faUser',
          'faUsers',
          'faWarning'
        ],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTelegram', 'faDiscord', 'faWhatsapp'],
      },
    ],
  },
  auth: {
    strategies: {
      local: false,
      cloud: {
        scheme: 'oauth2',
        endpoints: {
          authorization:
            'https://' +
            config.keycloakInstance +
            '/auth/realms/' +
            config.keycloakRealm +
            '/protocol/openid-connect/auth',
          token:
            'https://' +
            config.keycloakInstance +
            '/auth/realms/' +
            config.keycloakRealm +
            '/protocol/openid-connect/token',
          userInfo: 'http://localhost:4000/api/v1/users/me',
        },
        token: {
          maxAge: 600,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: config.keycloakClient,
        scope: ['openid'],
        codeChallengeMethod: 'plain',
      },
    },
  },
}
