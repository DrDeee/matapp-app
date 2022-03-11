interface AttachmentsState {
  content: { id: string; content: any }[]
}

export const state = (): AttachmentsState => ({
  content: [],
})

export const mutations = {
  setContent(state: AttachmentsState, data: { id: string; content: any }) {
    state.content = [...state.content.filter((c) => c.id !== data.id), data]
  },
}
export const actions: any = {
  async download({ commit, state }: any, id: string) {
    const firstTry = state.content.find((c: any) => c.id === id)
    if (firstTry) return firstTry.content
    const response = await this.$axios({
      url: 'attachments/download/' + id,

      method: 'GET',

      responseType: 'blob',
    })
    commit('setContent', {
      id,
      content: response.data,
    })
    return response.data
  },
  async upload(_ctx: any, data: any) {
    return (
      await this.$axios.post('attachments/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    ).data
  },
}
