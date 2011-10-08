/**
 * @class List.js
 * @description OM Grid Panel
 * @namespace OM.view.order.List
 * @author Vaibhav Ramdasi
 * @last updated 10/20/2011
 */


Ext.define('OM.view.order.List',
{
	extend:'Ext.grid.Panel',
	
	alias:'widget.orderlist',  //xtype
	
	store:'OrdersStore',	
	
	forceFit:true,							//Fit to container
	
	columnLines:true,
	
	autoResizeColumns:true,
	
	initComponent:function()
	{
		
		this.columns=
		[
			{
				header:'Order ID',
				dataIndex:'orderID',
				sortable:false,
				menuDisabled:true
							
			},
			{
				header:'Ordered On',
				dataIndex:'orderDate',
				sortable:false,
				menuDisabled:true
							
			},
			{
				header:'Customer ID',
				dataIndex:'customerID',
				sortable:false,
				menuDisabled:true
							
			},
			{
				header:'Amount',
				dataIndex:'amount',
				sortable:false,
				menuDisabled:true
							
			}
		];
		
		this.callParent(arguments);		
	}
	
	
});
