export default function ({ store, redirect }) {
  if (!store.state.user.auth) {
    redirect('/');
  }
}
