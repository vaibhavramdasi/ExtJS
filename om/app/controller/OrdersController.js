/**
 * @class OrdersController.js
 * @description controls OM grid .
 * @namespace OM.controller.OrdersController
 * @author Vaibhav Ramdasi
 * @last updated 10/20/2011
 */


Ext.define('OM.controller.OrdersController',
{
	extend:'Ext.app.Controller',
	models:['Order','Customer'], 							//Specify models to be used
	stores:['OrdersStore','CustomerStore'], 						//Specify stores to be used
	views:['order.List','Viewport','customer.Details'],			//Specify views to be used
	refs:
	[
		{ref:'displayPanel',selector:'panel[itemId=panelCustomerInfo]'}   //Provide getters to components
	],
	init:function()								
		{
			Ext.create('OM.view.Viewport'); 	//Creates viewport
			
			var panel=this.getDisplayPanel();
			panel.removeAll();
			panel.add(  						//Dynamically embed view to viewport 
						{
							xtype:'customerinfo',
							flex:1,
							minHeight:100,
							autoHeight:true
							
						});
						
						
			this.control						//Setup Event handlers to Ext components
				({
				
				'orderlist':
					{
						itemclick:this.getCustomerDetails
					}
					
				});
				
		},
	
	getCustomerDetails:function(view,record, item,index,e,eOpts )
		{
			
			
			var cid=record.data.customerID;
			  
                 
			
			//Fetch Customer details
			
			Ext.Ajax.request({
				
				url:'services/GetCustomerDetails.php?cid='+cid+'',
				method:'GET',
				headers:'application/json; charset=utf-8',
				success:function(result,request)
				{
					
					var cidata=Ext.JSON.decode(result.responseText);
					var rec=[Ext.create('OM.model.Customer',cidata.data)]; 
					Ext.data.StoreManager.lookup('CustomerStore').loadRecords(rec);
						
													
						
					
				},
				failure:function(result,request){
					//Error Handling
					
				}
				
			});
			
		}	
		
	
});
