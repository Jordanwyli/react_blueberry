System.register(['immutable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Immutable;
    var homepageReducer, eventsReducer, industryReducer, decalReducer, aboutReducer, donateReducer, reducer;
    return {
        setters:[
            function (Immutable_1) {
                Immutable = Immutable_1;
            }],
        execute: function() {
            homepageReducer = function (state, action) {
                switch (action.type) {
                    default:
                        return state;
                }
            };
            eventsReducer = function (state, action) {
                switch (action.type) {
                    default:
                        return state;
                }
            };
            industryReducer = function (state, action) {
                switch (action.type) {
                    default:
                        return state;
                }
            };
            decalReducer = function (state, action) {
                switch (action.type) {
                    default:
                        return state;
                }
            };
            aboutReducer = function (state, action) {
                switch (action.type) {
                    default:
                        return state;
                }
            };
            donateReducer = function (state, action) {
                switch (action.type) {
                    default:
                        return state;
                }
            };
            reducer = function (state, action) {
                return Immutable.Map({
                    homepage: homepageReducer(state.get("homepage"), action),
                    events: eventsReducer(state.get("events"), action),
                    industry: industryReducer(state.get("industry"), action),
                    decal: decalReducer(state.get("decal"), action),
                    about: aboutReducer(state.get("about"), action),
                    donate: donateReducer(state.get("donate"), action)
                });
                // let newState = Object.assign({}, state);
                // newState[action.get("parent")] = action.page;
                // return newState;
            };
            exports_1("default",{
                reducer: reducer,
                defaults: Immutable.Map({
                    homepage: {},
                    events: {},
                    industry: {},
                    decal: {},
                    about: {},
                    donate: {}
                })
            });
        }
    }
});
//# sourceMappingURL=reductions.js.map