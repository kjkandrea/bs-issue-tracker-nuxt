export default function ({ store, redirect }) {
  console.log(store.state.user.me)
  if (store.state.user.auth) {
    redirect('/');
  }
}
