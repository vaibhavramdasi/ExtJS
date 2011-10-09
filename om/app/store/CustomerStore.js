/**
 * @class CustomerStore.js
 * @description stores Customer data using Customer model.
 * @namespace OM.store.CustomerStore
 * @author Vaibhav Ramdasi
 */

Ext.define('OM.store.CustomerStore',
{
	
extend:'Ext.data.Store',

autoLoad:false,

model:'OM.model.Customer'

});
