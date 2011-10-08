/**
 * @class Customer.js
 * @description Models OM customer details.
 * @namespace OM.model.Customer
 * @author Vaibhav Ramdasi
 * @last updated 10/20/2011
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
		type:'memory',								//bind to local data
		reader:
		{
			type:'json',
			root:'data'
			
		}
	}
		
	});
