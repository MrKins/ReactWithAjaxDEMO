import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CustomerList from "./Customer/CustomerList"
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

ReactDOM.render(
	<CustomerList />,
	document.getElementById('customersList')
);

registerServiceWorker();
