define(function( require ) {
    var ctor = function() {

    };

    ctor.prototype.activate = function() {
        console.log("Home activate");
    };

    ctor.prototype.viewAttached = function() {
        console.log("Home viewAttached");
    };

    return ctor;
});