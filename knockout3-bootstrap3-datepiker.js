ko.bindingHandlers.daterange = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var accessor = valueAccessor();
        var startObservable = accessor.start;
        var endObservable = accessor.end;

        $(element).datepicker({
            format: "dd/mm/yyyy",
            todayBtn: "linked",
            autoclose: true,
            todayHighlight: true
        }).on("changeDate", function (e) {
            startObservable(e.dates[0]);
            endObservable(e.dates[1]);

        });

    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        if (escape_ko_bindingHandlers_dateinput) return;
        var accessor = valueAccessor();
        var startObservable = accessor.start;
        var endObservable = accessor.end;

        //if (ko.isObservable(observable)) {
        //    var valuetoWrite = observable();
        //    $(element).tagsinput('removeAll');;
        //    $(element).tagsinput('items', valuetoWrite);
        //}
    }

};