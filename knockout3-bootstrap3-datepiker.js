var escape_ko_bindingHandlers_daterange = false;
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
            escape_ko_bindingHandlers_daterange = true;

            startObservable(new Date($(e.target).data().datepicker.range[0]));
            endObservable(new Date($(e.target).data().datepicker.range[1]));

            escape_ko_bindingHandlers_daterange = false;

        });

    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        if (escape_ko_bindingHandlers_daterange) return;
        var accessor = valueAccessor();
        var startObservable = accessor.start;
        var endObservable = accessor.end;

        if (ko.isObservable(startObservable)) $(element).datepicker('setStartDate', startObservable());
        if (ko.isObservable(endObservable)) $(element).datepicker('setEndDate', endObservable());

    }

};
