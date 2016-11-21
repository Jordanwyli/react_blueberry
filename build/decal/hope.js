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
    var Hope, HopeFaq, HopeResources, HopeArchive;
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
            Hope = (function (_super) {
                __extends(Hope, _super);
                function Hope(props) {
                    _super.call(this, props);
                }
                Hope.prototype.getAboutText = function () {
                    return (React.createElement("div", {class: "content"}, 
                        React.createElement("div", {class: "left"}, 
                            React.createElement("span", {class: "heading blue"}, "Hands On Practical Electronics"), 
                            React.createElement("br", null), 
                            React.createElement("br", null), 
                            React.createElement("p", null, "Over the last several years, the UC Berkeley IEEE Student Branch has been developing and facilitating its Hands On Practical Electronics classes for both university and high school audiences. Based on the principle that building a circuit on a breadboard is an intuitive and exciting way to introduce electrical engineering, each lesson features fundamental theory combined with a simple but practical application. After a brief lecture, students are equipped with a soldering iron, multimeter, board, and various electronic components from which they construct a device which clearly demonstrates the lesson's core concept. Thus after each lesson, the student leaves not only with new knowledge but also an application of that knowledge. Be it a night light, solar cell battery charger, thermometer, or digital lock, the class projects show that electrical engineering is not just abstract equations accessible only to a select few, but rather the power to control and design exciting real world applications accessible to all."), 
                            React.createElement("br", null), 
                            React.createElement("p", null, "We say “accessible to all” with confidence because our lessons assume no background in the sciences and do not require any advanced math. The class is geared towards students outside the College of Engineering, and each semester we attract a diverse group of students with different backgrounds. The DeCal provides an opportunity for students to gain exposure to the field of electrical engineering without the commitment of a four-unit technical course. This also makes the course popular for students considering engineering, as it serves as a brief introduction to the material seen in EE 40/42/43/100."), 
                            React.createElement("br", null), 
                            React.createElement("p", null, "We are also extending our efforts to local high schools. High school students are rarely exposed to any electrical engineering in their standard coursework, and what mere exposure they may get often comes from physics courses. However, these courses tend to stay in the realm of theory and do not emphasize the many applications of electrical engineering in every day life. As a consequence, many students are ill-informed about the field and are cautious about considering electrical engineering as a college major. Our goal is to help cultivate interest in the field and show high school students the many academic and professional opportunities in one of the biggest and most exciting industries.")), 
                        React.createElement("div", {class: "right"}, 
                            React.createElement("img", {alt: "1", class: "hope-pic", src: "/assets/hope/1-6bd7f4d3f5fd42eb7fa36ed015cf7e74.png"}), 
                            React.createElement("img", {alt: "2", class: "hope-pic", src: "/assets/hope/2-e8b61814a4ed5ae43f8130bb152ad373.png"}), 
                            React.createElement("img", {alt: "3", class: "hope-pic", src: "/assets/hope/3-c554c623945ff95e2f65372022fba80c.png"}))));
                };
                Hope.prototype.render = function () {
                    return (React.createElement("div", null, 
                        React.createElement("h1", null, "Hope"), 
                        React.createElement(react_router_1.Link, {to: "/decal/hope"}, "About"), 
                        " ", 
                        React.createElement("br", null), 
                        React.createElement(react_router_1.Link, {to: "/decal/hope/faq"}, "FAQ"), 
                        " ", 
                        React.createElement("br", null), 
                        React.createElement(react_router_1.Link, {to: "/decal/hope/resources"}, "Resources"), 
                        " ", 
                        React.createElement("br", null), 
                        React.createElement(react_router_1.Link, {to: "/decal/hope/archive"}, "Archive"), 
                        this.props.children ? this.props.children : this.getAboutText()));
                };
                Hope = __decorate([
                    react_redux_1.connect(function (state) { return ({}); }, function (dispatch) { return ({}); })
                ], Hope);
                return Hope;
            }(React.Component));
            exports_1("Hope", Hope);
            HopeFaq = (function (_super) {
                __extends(HopeFaq, _super);
                function HopeFaq(props) {
                    _super.call(this, props);
                }
                HopeFaq.prototype.render = function () {
                    return (React.createElement("div", {class: "content"}, 
                        React.createElement("span", {class: "heading blue"}, "FAQ"), 
                        React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("span", {class: "subheading grey"}, "What is the subject matter of the course?"), 
                        React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("p", null, "The class will go through the standard coursework of a first-semester-in-electronics course. We will start with the physics of charge, voltage, current, resistance, and capacitance. We will then abstract these concepts into circuit components and consider basic circuit analysis methods. After a solid foundation in passive circuits has been established, we will introduce active devices such as operational amplifiers, timers, and logic gates. Basic semiconductor physics will also be covered, including MOS transistors, diodes, and solar cells. Modern integrated circuit fabrication may be covered, if time permits."), 
                        React.createElement("br", null), 
                        React.createElement("span", {class: "subheading grey"}, "What are the key learning outcomes?"), 
                        React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("p", null, "Our goal is to provide a fun and interesting introduction to Electrical Engineering. Upon completion of HOPE, students will have obtained the knowledge required to understand the role electronics play in their day-to-day lives. They will also have learned practical skills that can be applied in personal projects. Past examples include blinking bicycle safety lights, battery powered iPhone chargers, battery powered guitar amplifiers, and more."), 
                        React.createElement("br", null), 
                        React.createElement("span", {class: "subheading grey"}, "How will student performance be evaluated?"), 
                        React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("p", null, "Regular attendance is required. Without practical, in-lab experience, the theory will be less meaningful. Students will also be evaluated upon participation. In order for students to learn from the lab component of the class, they must actually construct the circuits. As long as students simply attend, participate, and put effort into the class, they will receive a passing mark. The course curriculum and lesson and lab plans are carefully reviewed by professors in the Electrical Engineering department."), 
                        React.createElement("br", null), 
                        React.createElement("span", {class: "subheading grey"}, "How can I contact the instructors?"), 
                        React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("p", null, 
                            "Email the instructors at ", 
                            React.createElement("span", {class: "email"}, "ieee-hope@lists.berkeley.edu"))));
                };
                return HopeFaq;
            }(React.Component));
            exports_1("HopeFaq", HopeFaq);
            HopeResources = (function (_super) {
                __extends(HopeResources, _super);
                function HopeResources(props) {
                    _super.call(this, props);
                }
                HopeResources.prototype.render = function () {
                    return (React.createElement("div", {class: "content"}, 
                        React.createElement("div", {class: "left"}, 
                            React.createElement("table", {id: "hope-resources"}, 
                                React.createElement("tbody", null, 
                                    React.createElement("tr", null, 
                                        React.createElement("th", {class: "hope-header"}, "Title"), 
                                        React.createElement("th", {class: "hope-header"}, "Lectures"), 
                                        React.createElement("th", {class: "hope-header"}, "Labs")), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Course Introduction"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/00.pdf", class: "hope-resource"}, "Lecture 0")
                                        ), 
                                        React.createElement("td", {class: "hope-link"})), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Safety, Soldering, Terminology"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/01.pdf", class: "hope-resource"}, "Lecture 1")
                                        ), 
                                        React.createElement("td", {class: "hope-link"})), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Voltage, Current, Resistance"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/02.pdf", class: "hope-resource"}, "Lecture 2")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/labs/02.pdf", class: "hope-resource"}, "Lab 2")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Ohm's Law, Equivalent Resistance"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/03.pdf", class: "hope-resource"}, "Lecture 3")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/labs/03.pdf", class: "hope-resource"}, "Lab 3")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Capacitance"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/04.pdf", class: "hope-resource"}, "Lecture 4")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/labs/04.pdf", class: "hope-resource"}, "Lab 4")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Amplifiers"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/05.pdf", class: "hope-resource"}, "Lecture 5")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/labs/05.pdf", class: "hope-resource"}, "Lab 5")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Oscillators"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/06.pdf", class: "hope-resource"}, "Lecture 6")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/labs/06.pdf", class: "hope-resource"}, "Lab 6")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Silicon"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/07.pdf", class: "hope-resource"}, "Lecture 7")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/labs/07.pdf", class: "hope-resource"}, "Lab 7")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Transistors"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/08.pdf", class: "hope-resource"}, "Lecture 8")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/labs/08.pdf", class: "hope-resource"}, "Lab 8")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Digital Logic"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/lectures/09.pdf", class: "hope-resource"}, "Lecture 9")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/materials/labs/09.pdf", class: "hope-resource"}, "Lab 9")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Final Projects!"), 
                                        React.createElement("td", {class: "hope-link"}), 
                                        React.createElement("td", {class: "hope-link"})), 
                                    React.createElement("tr", null))
                            )
                        ), 
                        React.createElement("div", {class: "right"}, 
                            React.createElement("span", {class: "heading blue"}, "Resources"), 
                            React.createElement("br", null), 
                            React.createElement("br", null), 
                            React.createElement("p", null, "All the resources used to conduct the H.O.P.E course are available here. A syllabus outlining the course structure can also be found here."), 
                            React.createElement("br", null), 
                            React.createElement("p", null, "Please e-mail the H.O.P.E. committee if you intend to use these resources outside of personal use."), 
                            React.createElement("br", null), 
                            React.createElement("a", {href: "/course/materials/syllabus.pdf", class: "blue"}, "Course Syllabus"))));
                };
                return HopeResources;
            }(React.Component));
            exports_1("HopeResources", HopeResources);
            HopeArchive = (function (_super) {
                __extends(HopeArchive, _super);
                function HopeArchive(props) {
                    _super.call(this, props);
                }
                HopeArchive.prototype.render = function () {
                    return (React.createElement("div", {class: "content"}, 
                        React.createElement("div", {class: "left"}, 
                            React.createElement("table", {id: "hope-resources"}, 
                                React.createElement("tbody", null, 
                                    React.createElement("tr", null, 
                                        React.createElement("th", {class: "hope-header"}, "Title"), 
                                        React.createElement("th", {class: "hope-header"}, "Lessons"), 
                                        React.createElement("th", {class: "hope-header"}, "Handouts"), 
                                        React.createElement("th", {class: "hope-header"}, "Labs")), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Course Introduction"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/01.ppt", class: "hope-resource"}, "Lesson 1")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/01.pdf", class: "hope-resource"}, "Handout 1")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/labs/01.pdf", class: "hope-resource"}, "Lab 1")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Voltage, Current, Resistance"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/02.ppt", class: "hope-resource"}, "Lesson 2")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/02.pdf", class: "hope-resource"}, "Handout 2")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/labs/02.pdf", class: "hope-resource"}, "Lab 2")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Ohm's Law"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/03.ppt", class: "hope-resource"}, "Lesson 3")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/03.pdf", class: "hope-resource"}, "Handout 3")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/labs/03.pdf", class: "hope-resource"}, "Lab 3")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Capacitance"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/04.ppt", class: "hope-resource"}, "Lesson 4")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/04.pdf", class: "hope-resource"}, "Handout 4")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/labs/04.pdf", class: "hope-resource"}, "Lab 4")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Silicon, Breadboards"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/05.ppt", class: "hope-resource"}, "Lesson 5")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/05.pdf", class: "hope-resource"}, "Handout 5")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/labs/05.pdf", class: "hope-resource"}, "Lab 5")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "PN Junctions, Diodes, Solar Cells"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/06.ppt", class: "hope-resource"}, "Lesson 6")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/06.pdf", class: "hope-resource"}, "Handout 6")
                                        ), 
                                        React.createElement("td", {class: "hope-link"})), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "MOSFETs"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/07.ppt", class: "hope-resource"}, "Lesson 7")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/07.pdf", class: "hope-resource"}, "Handout 7")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/labs/07.pdf", class: "hope-resource"}, "Lab 7")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "MOSFETs"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/08.ppt", class: "hope-resource"}, "Lesson 8")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/08.pdf", class: "hope-resource"}, "Handout 8")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/labs/08.pdf", class: "hope-resource"}, "Lab 8")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "CMOS, Digital Logic"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/09.ppt", class: "hope-resource"}, "Lesson 9")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/09.pdf", class: "hope-resource"}, "Handout 9")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/labs/09.pdf", class: "hope-resource"}, "Lab 9")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Fabrication"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/10.ppt", class: "hope-resource"}, "Lesson 10")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/handouts/10.pdf", class: "hope-resource"}, "Handout 10")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/labs/10.pdf", class: "hope-resource"}, "Lab 10")
                                        )), 
                                    React.createElement("tr", null, 
                                        React.createElement("td", {class: "hope-link"}, "Inductors"), 
                                        React.createElement("td", {class: "hope-link"}, 
                                            React.createElement("a", {href: "/course/archive/materials/lessons/11.ppt", class: "hope-resource"}, "Lesson 11")
                                        ), 
                                        React.createElement("td", {class: "hope-link"}), 
                                        React.createElement("td", {class: "hope-link"})))
                            )
                        ), 
                        React.createElement("div", {class: "right"}, 
                            React.createElement("span", {class: "heading blue"}, "Archive"), 
                            React.createElement("br", null), 
                            React.createElement("br", null), 
                            React.createElement("p", null, "Prior resources used to conduct the H.O.P.E course are available here. A former syllabus outlining the course structure can also be found here."), 
                            React.createElement("br", null), 
                            React.createElement("p", null, "Please e-mail the H.O.P.E. committee if you intend to use these resources outside of personal use."), 
                            React.createElement("br", null), 
                            React.createElement("a", {href: "/course/archive/materials/syllabus.pdf", class: "blue"}, "Course Syllabus"))));
                };
                return HopeArchive;
            }(React.Component));
            exports_1("HopeArchive", HopeArchive);
        }
    }
});
//# sourceMappingURL=hope.js.map