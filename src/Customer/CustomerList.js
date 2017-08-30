/**
 * Created by mingk on 2017/8/28.
 */
import React from "react";
import {AjaxGet} from "../Common/Ajax"
import CustomerItem from './CustomerItem'

class CustomerList extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			customers: []
		};
	}

	componentDidMount() {
		this.result4Interval = setInterval(() => this.getCustomerList(), 10000);
	}

	componentWillUnmount() {
		clearInterval(this.result4Interval);
	}

	getCustomerList() {
		this.setState({customers: []});

		let url = 'http://localhost:5120/Service.svc/rest/GetCustomer';

		AjaxGet(url, function(data) {
			for (var i = 0; i < data.length; i++){

				var	customer= {
					customerID: '',
					customerName: '',
					customerAddress: ''
				};

				customer.customerID = data[i].customerID;
				customer.customerName = data[i].customerName;
				customer.customerAddress = data[i].customerAddress;

				this.setState({customers: this.state.customers.concat([customer])});
			}
		}.bind(this));

		console.log("跑了一次");
	}

	setCustomerListState() {

	}


	render(){
		return(
			<table className="table-bordered">
				<thead>
				<tr>
					<th>客户ID</th>
					<th>客户名</th>
					<th>客户地址</th>
				</tr>
				</thead>
				<tbody>
				{this.state.customers.map((customer) =>
					<CustomerItem key={customer.customerID} customer={customer} />
				)}
				</tbody>
			</table>
		);
	}
}

export default CustomerList;