export default ({ store }, inject) => {
  inject('dialogs', {
    open: dialogId => store.commit('layout/addDialog', dialogId),
    close: dialogId => store.commit('layout/removeDialog', dialogId)
  })
}
