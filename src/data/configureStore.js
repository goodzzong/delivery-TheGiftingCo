import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { createRootReducer } from "@/data/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = createRootReducer();
export default function configureStore() {
	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(thunk),
			composeWithDevTools()
		)
	);

	return {
		store
	}
}
