import React from 'react'
import { render } from 'react-dom'
import Index from './containers'
import { Provider } from 'react-redux'


render(
	<Provider store={window.store}>
		<Index />
	</Provider>
	,document.getElementById("index")
)