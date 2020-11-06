var customMatchers = {
    toBeGoofy: function(matchersUtil){
        return {
            compare: function(actual,expected){
                if (expected === undefined){
                    expected = '';
                }

                var result = {};

                result.pass = matchersUtil.equals(actual.hyuk, "gawrsh" + expected);
                if (result.pass){
                    result.message = "Expected" + actual + "not to be quite so goofy";
                } else{
                    result.message = "Expected" + actual + "to be goofy, but it was not very goofy";
                }
                return result;
            }
        };
    }
};

describe("Custom matcher: 'toBeGoofy'", function(){

    beforeEach(function(){
        jasmine.addMatchers(customMatchers);
    });

it("is available on an expectation", function() {
    expect({
      hyuk: 'gawrsh'
    }).toBeGoofy();
  });

  it("can take an 'expected' parameter", function() {
    expect({
      hyuk: 'gawrsh is fun'
    }).toBeGoofy(' is fun');
  });

  it("can be negated", function() {
    expect({
      hyuk: 'this is fun'
    }).not.toBeGoofy();
  });
});
