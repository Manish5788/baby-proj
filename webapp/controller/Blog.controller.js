sap.ui.define([
    "sap/m/library",
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
     * 
	 */
    function (mobileLibrary, Controller, History) {
        "use strict";

        var URLHelper = mobileLibrary.URLHelper;

        return Controller.extend("proj.pro.controller.Blog", {
            onInit: function () {
                const oRouter1 = this.getOwnerComponent().getRouter();
                var oRouters  = "Hello Man";
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //oRouter.getRoute("RouteBlogsView").attachMatched(this._onRouteFound, this);

            },
            // Bind UI element from backend data 
            _onRouteFound: function (oEvent) {

                console.log(" BLOG VIEW"); // }
            },
            goBack: function (oEvent) {
                var oHistory, sPreviousHash;

                oHistory = History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getOwnerComponent().getRouter().navTo("RouteView", {}, true /*no history*/);
                }
            },



        });
    });