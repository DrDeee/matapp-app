import config from './config'

export default {
  ssr: process.env.SSR || true,
  target: process.env.TARGET || 'server',
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
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    'nuxt-buefy',
    'nuxt-fontawesome',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],

  pwa: {
    icon: {
      source: '~/static/icon.png'
    },
    meta: {
      title: 'MAT App',
      author: 'Elias Bistry',
      theme_color: '#171141',
      ogSiteName: 'MAT App',
      ogTitle: 'Moderations- und Awarenessteam',
      ogImage: true,
      ogHost: 'https://mat.deee4future.me'
    },
    manifest: {
      lang: 'de',
      short_name: 'MAT-App',
      background_color: '#171141'
    },
  },
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon',
  },
  build: {},
  router: {
    base: config.basePath || '/',
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
          'faBug',
          'faCheck',
          'faChevronDown',
          'faChevronUp',
          'faCloudArrowDown',
          'faEdit',
          'faEye',
          'faFilter',
          'faLink',
          'faLock',
          'faMessage',
          'faMinus',
          'faPlus',
          'faTrash',
          'faUser',
          'faUsers',
          'faWarning',
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
          userInfo: config.apiHost + '/api/v1/users/me',
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
  publicRuntimeConfig: {
    axios: {
      baseURL: config.apiHost + '/api/v1',
    },
  },
}
