describe("My Feature My context", function() {

    it ("should have a passing test", function () {
        expect(1).toBe(1);
    });

    it ("might have a failing test", function () {
        expect(2).toBe(2);
    });


    it("minght have another unfulfilled test", function () {
        expect(0).toBeFalsy();
    });

    it ("might have an unfulfilled test", function () {
        expect(1).toBe(1);

    });
});