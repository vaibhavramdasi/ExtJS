/**
 * @class Viewport.js
 * @description Viewport component encapsulating whole browser window.
 * @namespace OM.view.Viewport
 * @author Vaibhav Ramdasi
 * @last updated 10/20/2011
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
			maxHeight:265,
			region:'north',
			//minHeight:400,
			autoHeight:true,
			xtype:'orderlist'	
		}
		,
		{	
			title:'Customer Details :',
			xtype:'panel',
			flex:2,
			maxHeight:100,
			itemId:'panelCustomerInfo',
			region:'center',
			minHeight:100,
			frame:true,
			border:false,
			autoHeight:true
			
		}
	]
	
	
});
