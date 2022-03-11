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
    headers: {
      common: {
        authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJnVndYem14MXF4Z25TcEowUkJweUVWbWt6TW9JZGxoREl1WW83V3RqZUNJIn0.eyJleHAiOjE2NDYzNzQ0NjksImlhdCI6MTY0NjMzODc4NCwiYXV0aF90aW1lIjoxNjQ2MzM4NDY5LCJqdGkiOiIwMzY5MzczMS02MTVkLTRjODctYWRlMS0yMzExMDczNmRhMjciLCJpc3MiOiJodHRwczovL2F1dGgubWVzc2VuZ2VyLmZyaWRheXNmb3JmdXR1cmUuZGV2L2F1dGgvcmVhbG1zL21hdCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJmMDJjMzA1Zi1lMzExLTRiZDAtODQzMi1lOThmMGJjZGQ1Y2YiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJtYXQtYXBwIiwic2Vzc2lvbl9zdGF0ZSI6ImE5NmE3MDk5LWY1YWEtNDJmNC05ODQ1LTkwMzJjODVkMjUxNCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtbWF0Il19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsInNpZCI6ImE5NmE3MDk5LWY1YWEtNDJmNC05ODQ1LTkwMzJjODVkMjUxNCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZWxpYXMiLCJ1c2VybmFtZSI6ImVsaWFzIn0.Av6Y5xGc2Sk9Df8l1iUPyEmldLXC72Z6s2glmieorVs6TrfacDv3wx1At11Wx_FHXIchDRuXLKhAJVHLomrwNU89dpBxUECLA73IBJ-l4wdvX4jiuWBH19b41OrW6k-CLoxHOltNZMMN9KXuPUiY3yAs-Pq-JAR70TIUofUzciUUg4jMEhH9XQK8CDh-Ul2ecqmNbjzcPWgQHv4_YoqgkHEM38S9x5vK60XYgMQicmXTT-71Wy9G-ZFGmcb73lfq1THmQFduk6Vu9jv-VFKf-E7ODsXZ9XATqEg4uJiTWWpg4UsXhvDkMaB5p09jsXSFIdAu-HgblpC8Gkafy_s4tg',
      },
    },
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
    // middleware: ['auth'],
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
