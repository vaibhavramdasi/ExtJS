/**
 * @class CustomerStore.js
 * @description stores Customer data using Customer model.
 * @namespace OM.store.CustomerStore
 * @author Vaibhav Ramdasi
 * @last updated 10/20/2011
 */

Ext.define('OM.store.CustomerStore',
{
	
extend:'Ext.data.Store',

autoLoad:false,

model:'OM.model.Customer'

});
