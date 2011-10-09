/**
 * @class OrdersStore.js
 * @description stores Order data using Order model.
 * @namespace OM.store.OrdersStore
 * @author Vaibhav Ramdasi
 */

Ext.define('OM.store.OrdersStore',
{
	
extend:'Ext.data.Store',

autoLoad:true,

alias:'widget.ordersstore',

model:'OM.model.Order'
});
