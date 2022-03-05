interface ChatsState {
  all: any[]
}

export const state = (): ChatsState => ({
  all: [],
})

export const mutations = {
  putChat(state: ChatsState, chat: any) {
    const chats = []
    let isAdded = false
    state.all.forEach((c) => {
      if (c.id === chat.id) {
        chats.push(chat)
        isAdded = true
      } else chats.push(c)
    })
    if (!isAdded) chats.push(chat)
    state.all = chats
  },
  setChats(state: ChatsState, chats: any[]) {
    state.all = chats
  },
  removeChat(state: ChatsState, chatId: string) {
    state.all = state.all.filter((chat) => chat.id !== chatId)
  },
}

export const actions: any = {
  async loadAll({ commit }: any) {
    commit('setChats', await this.$axios.$get('/locations'))
  },
  async loadOne(
    ctx: { commit: any; state: ChatsState; dispatch: any },
    id: string
  ) {
    const firstTry = ctx.state.all.find((c) => c.id === id)
    if (firstTry) return firstTry
    const chat = await this.$axios.$get('/locations/' + id)
    ctx.commit('putChat', chat)
    return chat
  },
  async update({ commit }: any, data: any) {
    const chat = await this.$axios.$put(
      '/locations/' + data.id,
      Object.assign(data, { id: undefined })
    )
    commit('putChat', chat)
  },
  async create({ commit }: any, data: any) {
    const chat = await this.$axios.$post('/locations', data)
    commit('putChat', chat)
    return chat
  },
  async delete({ commit }: any, chatId: string) {
    await this.$axios.$delete('/locations/' + chatId)
    commit('removeChat', chatId)
  },
  async addUser({ commit }: any, data: { userId: string; chatId: string }) {
    commit(
      'putChat',
      await this.$axios.$post(
        '/locations/' + data.chatId + '/members/' + data.userId
      )
    )
  },
  async removeUser({ commit }: any, data: { userId: string; chatId: string }) {
    commit(
      'putChat',
      await this.$axios.$delete(
        '/locations/' + data.chatId + '/members/' + data.userId
      )
    )
  },
}
