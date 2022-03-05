interface TargetsState {
  all: any[]
}

export const state = (): TargetsState => ({
  all: [],
})

export const mutations = {
  putTarget(state: TargetsState, target: any) {
    const targets = []
    let isAdded = false
    state.all.forEach((t) => {
      if (t.id === target.id) {
        targets.push(target)
        isAdded = true
      } else targets.push(t)
    })
    if (!isAdded) targets.push(target)
    state.all = targets
  },
  setTargets(state: TargetsState, targets: any[]) {
    state.all = targets
  },
  removeTarget(state: TargetsState, targetId: string) {
    state.all = state.all.filter((t) => t.id !== targetId)
  },
}

export const actions: any = {
  async loadAll({ commit }: any) {
    commit('setTargets', await this.$axios.$get('/targets'))
  },
  async loadOne(
    ctx: { commit: any; state: TargetsState; dispatch: any },
    id: string
  ) {
    const firstTry = ctx.state.all.find((t) => t.id === id)
    if (firstTry) return firstTry
    const target = await this.$axios.$get('/targets/' + id)
    ctx.commit('putTarget', target)
    return target
  },
  async create({ commit }: any, data: any) {
    const target = await this.$axios.$post('/targets', data)
    commit('putTarget', target)
    return target
  },
  async update({ commit }: any, data: any) {
    const target = await this.$axios.$put(
      '/targets/' + data.id,
      Object.assign(data, { id: undefined })
    )
    commit('putTarget', target)
  },
  async delete({ commit }: any, chatId: string) {
    await this.$axios.$delete('/targets/' + chatId)
    commit('removeTarget', chatId)
  },
  async addNote({ commit }: any, data: any) {
    commit(
      'putTarget',
      await this.$axios.$post('/targets/' + data.targetId + '/notes', {
        content: data.note,
      })
    )
  },
  async removeNote({ commit }: any, data: any) {
    commit(
      'putTarget',
      await this.$axios.$delete(
        '/targets/' + data.targetId + '/notes/' + data.noteIndex
      )
    )
  },
}
