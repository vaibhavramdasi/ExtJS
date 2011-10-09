/**
 * @class OrdersController.js
 * @description controls OM grid .
 * @namespace OM.controller.OrdersController
 * @author Vaibhav Ramdasi
 */


Ext.define('OM.controller.OrdersController',
{
	extend:'Ext.app.Controller',
	models:['Order','Customer'], 							//Specify models to be used
	stores:['OrdersStore','CustomerStore'], 						//Specify stores to be used
	views:['order.List','Viewport','customer.Details'],			//Specify views to be used
	refs:
	[
		
	],

	init:function()								
		{
										
			this.control						//Setup Event handlers to Ext components
				(
					{
					
					'orderlist':
						{
							itemclick:this.getCustomerDetails
						}
						
					}
				);
				
		},

	onLaunch:function()
		{
			//manipulate views
		},
	getCustomerDetails:function(view,record, item,index,e,eOpts )
		{
			
			this.getCustomerStoreStore().load({params:{'cid':record.data.customerID}});
			
		}	
		
	
});
