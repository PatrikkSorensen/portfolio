import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'

import App from './components/app'

export const history = createHistory()

const middleware = [
	thunk,
	routerMiddleware(history)
]

const composedEnhancers = compose(
	applyMiddleware(...middleware)
)

render(
	<Provider store={createStore(rootReducer, composedEnhancers)} >
		<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.querySelector('#root')
)