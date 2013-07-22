define(function( require ) {
    var ctor = function() {

    };

    ctor.prototype.activate = function() {
        console.log("Home activate");
    };

    ctor.prototype.viewAttached = function() {
        var $kendoHost = $('#kendoHost');
        // Workaround for height = 0.
        // Additional code required to calculate on windows.resize
        $kendoHost.height($(window).height());
        this.app = new kendo.mobile.Application($kendoHost, {
            skin: "flat"
        });

        console.log("Home viewAttached", this.app, $kendoHost.height());

    };

    return ctor;
});