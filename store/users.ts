interface UsersState {
  all: any[]
}

export const state = (): UsersState => ({
  all: [],
})

export const mutations = {
  putUser(state: UsersState, user: any) {
    const exsisting = state.all.find((u) => u.id === user.id)
    if (exsisting) {
      state.all[state.all.indexOf(exsisting)] = user
    } else {
      state.all.push(user)
    }
  },
  setUsers(state: UsersState, users: any[]) {
    state.all = users
  },
}

export const actions: any = {
  async loadAll({ commit }: any) {
    commit('setUsers', await this.$axios.$get('/users'))
  },
  async loadOne(
    ctx: { commit: any; state: UsersState; dispatch: any },
    id: string
  ) {
    const firstTry = ctx.state.all.find((u) => u.id === id)
    if (firstTry) return firstTry
    const user = await this.$axios.$get('/users/' + id)
    ctx.commit('putUser', user)
    return user
  },
  async loadMany(
    ctx: { commit: any; state: UsersState; dispatch: any },
    ids: string[]
  ) {
    const users = []
    for (const id of ids) {
      users.push(await ctx.dispatch('loadOne', id))
    }
    return users
  },
}
