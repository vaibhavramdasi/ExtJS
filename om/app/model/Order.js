/**
 * @class Order.js
 * @description Models OM grid data unit-Purchase Order.
 * @namespace OM.model.Order
 * @author Vaibhav Ramdasi
 * @last updated 10/20/2011
 */


Ext.define('OM.model.Order',
	{

	extend:'Ext.data.Model',
	fields:
		[
		{name:'orderID',dataType:'string'},
		{name:'orderDate',dataType:'string'},
		{name:'customerID',dataType:'string'},
		{name:'amount',dataType:'string'}
		],
	proxy:
		{
			type:'ajax',								//bind to local data
			url:'services/GetOrders.php',
			reader:
			{
				type:'json',
				root:'d',
				successProperty:'success'
			}
		}
			
	});
