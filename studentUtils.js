"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMedianGrade = calculateMedianGrade;
function calculateMedianGrade(grades) {
    if (grades.length === 0)
        return 0;
    var sortedGrades = __spreadArray([], grades, true).sort(function (a, b) { return a - b; });
    var mid = Math.floor(sortedGrades.length / 2);
    if (sortedGrades.length % 2 === 0) {
        return (sortedGrades[mid - 1] + sortedGrades[mid]) / 2;
    }
    else {
        return sortedGrades[mid];
    }
}
