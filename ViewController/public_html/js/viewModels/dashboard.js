/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojlegend', 'ojs/ojchart', 'ojs/ojtoolbar'], function (oj, ko, $) {

    function DashboardViewModel() {
        var self = this;

        // Attribute Groups Handler for Consistent Coloring
        var attrGroups = new oj.ColorAttributeGroupHandler();

        // Categories
        var categories = ["Initial", "Qualification", "Meeting", "Proposal", "Close"];
        var hiddenCategories = [categories[0]];
        self.hiddenCategoriesValue = ko.observableArray(hiddenCategories);

        // Chart Data
        var categoricalSeries = [{items : []}];
        var categoricalSeriesItems = categoricalSeries[0].items;
        categoricalSeriesItems.push( {
            value : 42, color : attrGroups.getValue(categories[0]), categories : [categories[0]]
        });
        categoricalSeriesItems.push( {
            value : 55, color : attrGroups.getValue(categories[1]), categories : [categories[1]]
        });
        categoricalSeriesItems.push( {
            value : 36, color : attrGroups.getValue(categories[2]), categories : [categories[2]]
        });
        categoricalSeriesItems.push( {
            value : 15, color : attrGroups.getValue(categories[3]), categories : [categories[3]]
        });
        categoricalSeriesItems.push( {
            value : 12, color : attrGroups.getValue(categories[4]), categories : [categories[4]]
        });

        var timeSeries = [{name : categories[0], items : [74, 62, 70, 76, 66]},{name : categories[1], items : [50, 38, 46, 54, 42]},{name : categories[2], items : [34, 22, 30, 32, 26]},{name : categories[3], items : [18, 6, 14, 22, 10]},{name : categories[4], items : [3, 2, 3, 3, 2]}];

        var pieSeries = [{name : categories[0], items : [42]},{name : categories[1], items : [55]},{name : categories[2], items : [36]},{name : categories[3], items : [10]},{name : categories[4], items : [5]}];

        var bubbleSeries = [{name : categories[0], items : [{x : 15, y : 25, z : 5},{x : 25, y : 30, z : 12}]},{name : categories[1], items : [{x : 15, y : 15, z : 8},{x : 20, y : 35, z : 14}]},{name : categories[2], items : [{x : 10, y : 10, z : 8},{x : 18, y : 55, z : 10}]},{name : categories[3], items : [{x : 8, y : 20, z : 6},{x : 11, y : 30, z : 8}]},{name : categories[4], items : [{x : 25, y : 45, z : 12},{x : 40, y : 55, z : 35}]}];

        var timeGroups = [1980, 1990, 2000, 2010, 2020];

        self.categoricalSeriesValue = ko.observableArray(categoricalSeries);
        self.categoricalGroupsValue = ko.observableArray(categories);
        self.timeSeriesValue = ko.observableArray(timeSeries);
        self.timeGroupsValue = ko.observableArray(timeGroups);
        self.pieSeriesValue = ko.observableArray(pieSeries);
        self.bubbleSeriesValue = ko.observableArray(bubbleSeries);

        // Legend Data
        var legendSections = [{items : []}];
        var legendItems = legendSections[0].items;
        for (var categoryIndex = 0;categoryIndex < categories.length;categoryIndex++) {
            var category = categories[categoryIndex];
            legendItems.push( {
                text : category, color : attrGroups.getValue(category), shortDesc : "Filter: " + category
            });
        }

        self.legendSections = ko.observableArray(legendSections);

        // Below are a subset of the ViewModel methods invoked by the ojModule binding
        // Please reference the ojModule jsDoc for additionaly available methods.
        /**
         * Optional ViewModel method invoked when this ViewModel is about to be
         * used for the View transition.  The application can put data fetch logic
         * here that can return a Promise which will delay the handleAttached function
         * call below until the Promise is resolved.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
         * the promise is resolved
         */
        self.handleActivated = function (info) {
            // Implement if needed
        };

        /**
         * Optional ViewModel method invoked after the View is inserted into the
         * document DOM.  The application can put logic that requires the DOM being
         * attached here.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
         */
        self.handleAttached = function (info) {
            // Implement if needed
        };

        /**
         * Optional ViewModel method invoked after the bindings are applied on this View.
         * If the current View is retrieved from cache, the bindings will not be re-applied
         * and this callback will not be invoked.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         */
        self.handleBindingsApplied = function (info) {
            // Implement if needed
        };

        /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
        self.handleDetached = function (info) {
            // Implement if needed
        };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
});