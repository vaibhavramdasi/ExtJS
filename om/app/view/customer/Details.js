/**
 * @class Details.js
 * @description Customer Information panel.
 * @namespace OM.view.customer.Details
 * @author Vaibhav Ramdasi
 * @last updated 10/20/2011
 */


Ext.define('OM.view.customer.Details',
{
	
	extend:'Ext.view.View',
	
	store:'CustomerStore',
	
	alias:'widget.customerinfo',
	
	itemSelector:'panelCustomerInfo',
	
	tpl: new Ext.XTemplate(
		'<tpl for=".">',                              
		'<tpl if="this.exists(customerID)">',
		'<p><b>Customer : </b>{customerID}</p>',
		'</tpl>',
		'<tpl if="this.exists(customerName)">',
		'<p><b>Name: </b>{customerName}</p>',
		'</tpl>',
		'<tpl if="this.exists(customerAddress)">',
		'<p><b>Address : </b>{customerAddress}</p>',
		'</tpl>',
		'<tpl if="this.exists(totalOrders)">',
		'<p><b>Number of Orders Placed : </b>{totalOrders}</p>',
		'</tpl>',
		'</tpl>',
		{
			
			exists:function(e)
			{
				
				if(e==''||typeof e=='null' || typeof e=='undefined')
				{
					return false;
				}
				else
				{
					return true;
					
				}
				
			}
		}
	)	
	
});
