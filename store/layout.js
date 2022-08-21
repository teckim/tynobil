export const state = () => ({
  dialogs: []
})

export const getters = {
  getDialogs (state) {
    return state.dialogs
  }
}

export const mutations = {
  addDialog (state, dialogId) {
    if (state.dialogs.includes(dialogId)) { return }

    state.dialogs = [...state.dialogs, dialogId]
  },
  removeDialog (state, dialogId) {
    state.dialogs = [...state.dialogs.filter(dialog => dialog !== dialogId)]
  }
}
