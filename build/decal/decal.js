/// <reference path='../../typings/index.d.ts'/>
System.register(['react', 'react-redux', 'react-router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var React, react_redux_1, react_router_1;
    var Decal;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (react_router_1_1) {
                react_router_1 = react_router_1_1;
            }],
        execute: function() {
            Decal = (function (_super) {
                __extends(Decal, _super);
                function Decal(props) {
                    _super.call(this, props);
                }
                Decal.prototype.getAboutText = function () {
                    return (React.createElement("div", null, 
                        React.createElement("h1", null, "Decal"), 
                        React.createElement("p", null, "IEEE at Berkeley hosts two decals, Micromouse and Hands On Practical Electronics (H.O.P.E)"), 
                        React.createElement(react_router_1.Link, {to: "/decal/hope"}, "H.O.P.E"), 
                        React.createElement("br", null), 
                        React.createElement(react_router_1.Link, {to: "/decal/micromouse"}, "Micromouse")));
                };
                Decal.prototype.render = function () {
                    return (React.createElement("div", null, this.props.children ? this.props.children : this.getAboutText()));
                };
                Decal = __decorate([
                    react_redux_1.connect(function (state) { return ({}); }, function (dispatch) { return ({}); })
                ], Decal);
                return Decal;
            }(React.Component));
            exports_1("Decal", Decal);
        }
    }
});
//# sourceMappingURL=decal.js.map