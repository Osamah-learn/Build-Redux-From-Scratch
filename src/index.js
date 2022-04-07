import store from './customStore';
import {BUG_ADDED} from "./reducer"
console.log(store)
store.dispatch({
    type: BUG_ADDED,
    payload: {description:"Test Baby Test"}
})
console.log("Store changed",store.getState())

store.subscribe(() => {
console.log("Subscribed")
})