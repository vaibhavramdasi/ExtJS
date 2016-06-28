/**
 * @class Viewport.js
 * @description Viewport component encapsulating whole browser window.
 * @namespace OM.view.Viewport
 * @author Vaibhav Ramdasi
 */


Ext.define('OM.view.Viewport',
{
	extend:'Ext.container.Viewport',
	layout:'border',
	border:false,
	items:
	[
		{	title:'Purchase Orders :',
			flex:1,
			maxHeight:200,
			region:'north',
			minHeight:200,
			autoHeight:true,
			xtype:'orderlist'	
		}
		,
		{	
			title:'Customer Details :',
			xtype:'panel',
			flex:2,
			maxHeight:200,
			itemId:'panelCustomerInfo',
			region:'center',
			minHeight:200,
			frame:true,
			border:false,
			autoHeight:true,
			items:
				[
					{
						xtype:'customerinfo',
						flex:1,
						minHeight:100,
						autoHeight:true
						
					}
				]
				
		}
	]
	
	
});
