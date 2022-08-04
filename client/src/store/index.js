import {createStore, applyMiddleware} from 'redux';
import { compose, composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootRecucer from '../reducer';


export const store = createStore (rootRecucer, composeWithDevTools(applyMiddleware(thunk)));
