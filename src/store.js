import { createStore } from 'redux';
import settingReducer from './reducer'
let store = createStore(settingReducer);
export default store;