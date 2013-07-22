define(function (require)
{
    var router = require('durandal/plugins/router');

    var shell = {
        router: router,
        activate: activate,
        viewAttached: viewAttached
    };

    return shell;

    function viewAttached()
    {
        console.log("viewAttached");

    }

    function activate()
    {
        console.log('Shell loaded');

        return router.activate('home');
    }
});
