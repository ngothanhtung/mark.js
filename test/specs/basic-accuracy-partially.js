/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2016, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
describe("basic mark with partially accuracy", function () {
    var $ctx;
    beforeEach(function (done) {
        loadFixtures("basic-accuracy-partially.html");

        $ctx = $(".basic-accuracy-partially");
        new Mark($ctx[0]).mark("lorem", {
            "accuracy": "partially",
            "separateWordSearch": false,
            "done": function () {
                done();
            }
        });
    });

    it("should wrap the right matches", function () {
        expect($ctx.find("mark")).toHaveLength(4);
        $ctx.find("mark").each(function () {
            expect($(this).text()).toBe("Lorem");
        });
    });
});
