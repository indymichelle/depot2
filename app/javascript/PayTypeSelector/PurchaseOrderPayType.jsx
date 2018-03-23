import React from 'react'

class PurchaseOrderPayType {
	render() {
		return (
			<div> 
				<div className="field">
					<label htlmFor="order_po_number">PO #</label>
					<input type="password"
								 name="order[po_number]"
								 id="order_po_number" />
				</div>
			</div>
		);
	}
}
export default PurchaseOrderPayType