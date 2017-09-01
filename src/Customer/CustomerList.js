/**
 * Created by mingk on 2017/8/28.
 */
import React from "react";
import {AjaxGet} from "../Common/Ajax"
import CustomerItem from './CustomerItem'

class CustomerList extends React.Component{

	customer = {
		customerID: '',
		customerName: '',
		customerAddress: ''
	};
	customers = [];
	row = 0;

	constructor(props){
		super(props);

		this.state = {
			customers4State: []
		};
	}

	componentDidMount() {

		(this.getCustomerList());
		//this.result4Interval = setInterval(() => this.getCustomerList(), 10000);

		this.result4Interval = setInterval(() => this.setCustomerListState(), 5000);
	}

	componentWillUnmount() {
		clearInterval(this.result4Interval);
	}

	getCustomerList() {
		this.customers = [];
		this.row = 0;
		this.setState({customers4State: []});
		let url = 'http://localhost:5120/Service.svc/rest/GetCustomer';

		AjaxGet(url, function(data) {

			for (var i = 0; i < data.length; i++){
				this.customer = {
					customerID: '',
					customerName: '',
					customerAddress: ''
				};

				this.customer.customerID = data[i].customerID;
				this.customer.customerName = data[i].customerName;
				this.customer.customerAddress = data[i].customerAddress;
				this.customers = this.customers.concat([this.customer]);

				//this.setState({customers4State: this.state.customers4State.concat([this.customer])});
			}
		}.bind(this));

		console.log("跑了一次");
	}

	setCustomerListState() {
		console.log(this.customers.length + "&" +  this.row);
		if(this.row == this.customers.length - 1){
			this.getCustomerList();
		} else{
			//每次循环都拿cutomers中的第row个
			this.setState({customers4State: this.state.customers4State.concat([this.customers[this.row]])});

			this.row++;
		}
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
				{this.state.customers4State.map((customer) =>
					<CustomerItem key={customer.customerID} customer={customer} />
				)}
				</tbody>
			</table>
		);
	}
}

export default CustomerList;