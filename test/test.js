//test/test.js
describe("A suite of basic functions", function () {
    it("Spec test 1, test the reverse function", function () {
        expect("DCBA").toEqual(reverse("ABCD"));
    });
    it("Spec test 2, test the reverse null function", function () {
        expect("input error").toBe(reverse());
    });
});
