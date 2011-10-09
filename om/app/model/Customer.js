/**
 * @class Customer.js
 * @description Models OM customer details.
 * @namespace OM.model.Customer
 * @author Vaibhav Ramdasi
 */


Ext.define('OM.model.Customer',
	{
	
	extend:'Ext.data.Model',
	fields:
		[
		{name:'customerID',dataType:'string'},
		{name:'customerName',dataType:'string'},
		{name:'customerAddress',dataType:'string'},
		{name:'totalOrders',dataType:'string'}
		],
	proxy:
		{
			type:'ajax',								//bind to local data
			url:'services/GetCustomerDetails.php',
			reader:
				{
					type:'json',
					root:'data'
					
				}
		}
		
	});
