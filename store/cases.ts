interface CasesState {
  all: any[]
}

export const state = (): CasesState => ({
  all: [],
})

function transform(c: any) {
  c.startDate = c.startDate ? new Date(c.startDate) : null
  c.endDate = c.endDate ? new Date(c.endDate) : null
  if (c.voting) {
    const voting = c.voting.split('/')
    c.voting = {
      '+': parseInt(voting[0]),
      '0': parseInt(voting[1]),
      '-': parseInt(voting[2]),
    }
  }
  return c
}

export const mutations = {
  putCase(state: CasesState, myCase: any) {
    const cases = []
    let isAdded = false
    state.all.forEach((t) => {
      if (t.id === myCase.id) {
        cases.push(transform(myCase))
        isAdded = true
      } else cases.push(t)
    })
    if (!isAdded) cases.push(transform(myCase))
    state.all = cases
  },
  setCases(state: CasesState, cases: any[]) {
    state.all = []
    cases.forEach((c) => state.all.push(transform(c)))
  },
  removeCase(state: CasesState, caseId: string) {
    state.all = state.all.filter((t) => t.id !== caseId)
  },
}

export const actions: any = {
  async loadAll({ commit }: any) {
    commit('setCases', await this.$axios.$get('/cases'))
  },
  async loadOne(
    ctx: { commit: any; state: CasesState; dispatch: any },
    id: string
  ) {
    const firstTry = ctx.state.all.find((c) => c.id === id)
    if (firstTry) return firstTry
    const myCase = await this.$axios.$get('/cases/' + id)
    ctx.commit('putCase', myCase)
    return myCase
  },
  async create({ commit }: any, data: any) {
    const target = await this.$axios.$post('/cases', data)
    commit('putCase', target)
    return target
  },
  async update({ commit }: any, data: any) {
    const c = await this.$axios.$put(
      '/cases/' + data.id,
      Object.assign(data, { id: undefined })
    )
    commit('putCase', c)
  },
  async delete({ commit }: any, caseId: string) {
    await this.$axios.$delete('/cases/' + caseId)
    commit('removeCase', caseId)
  },
  async addAttachment({ commit }: any, data: any) {
    commit(
      'putCase',
      await this.$axios.$post(
        `attachments/${data.attachmentId}/links/cases/${data.caseId}`
      )
    )
  },
}
