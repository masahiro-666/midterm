"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraduateStudent = void 0;
var part1_1 = require("./part1");
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(name, age, thesisTopic) {
        var _this = _super.call(this, name, age) || this;
        _this.thesisTopic = thesisTopic;
        return _this;
    }
    GraduateStudent.prototype.getAverageGrade = function () {
        var averageGrade = _super.prototype.getAverageGrade.call(this);
        if (this.thesisTopic === "Artificial Intelligence") {
            averageGrade += 5;
        }
        return averageGrade;
    };
    return GraduateStudent;
}(part1_1.Student));
exports.GraduateStudent = GraduateStudent;
