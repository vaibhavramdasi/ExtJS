/**
 * @class app.js
 * @description Application Controller/Entrypoint
 * @namespace ECC
 * @author Vaibhav Ramdasi
 * @last updated 10/20/2011
 */

Ext.onReady(function(){
Ext.Loader.setConfig({enabled:true}); //Enable Dynamic Class Loading


// Instantiate Application Class for OM.
Ext.application(
	{
		
		name:'OM',							//Global Variable pointing to OM Client app
		path:'om/app', 	//Directory path to app
		autoCreateViewport:false,			//Create viewport manually
		controllers:['OrdersController'],   //Array of Controllers
		launch:function()					//Called when all specified controllers are finished with initialization
			{	 
				
				//Manage application here	
				
			}
	}
);
});