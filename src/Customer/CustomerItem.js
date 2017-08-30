/**
 * Created by mingk on 2017/8/28.
 */
import React from "react";

class CustomerItem extends React.Component {
	render(){
		return (
			<tr>
				<td>{this.props.customer.customerID}</td>
				<td>{this.props.customer.customerName}</td>
				<td>{this.props.customer.customerAddress}</td>
			</tr>
		);
	}
}

export default CustomerItem;