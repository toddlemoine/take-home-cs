import { createStore } from 'redux';
import { tables } from '../reducers';

export const appStore = createStore(tables)
