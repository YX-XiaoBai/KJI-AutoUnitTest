/*
 * Unit tests for lib / calculator.js
 */

describe('calculator', function () {
    // inject the HTML fixture for the tests
    beforeEach(function () {
        var fixture = '<div id="fixture"><input id="x" type="text">' +
            '<input id="y" type="text">' +
            '<input id="add" type="button" value="Add Numbers">' +
            'Result: <span id="result" /></div>';

        /* element.insertAdjacentHTML(position, text);
         * position 一个 DOMString 表示插入内容相对于元素的位置，并且必须是以下字符串之一
         * 'beforebegin'：元素自身的前面。
         * 'afterbegin'：插入元素内部的第一个子节点之前。
         * 'beforeend'：插入元素内部的最后一个子节点之后。
         * 'afterend'：元素自身的后面。
         * text 是要被解析为HTML或XML元素，并插入到DOM树中的 DOMString
         */
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });
    beforeEach(function () {
        window.calculator.init();
    });
    it('should return 3 for 1 + 2', function () {
        document.getElementById('x').value = 1;
        document.getElementById('y').value = 2;
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('3');
    });
    it('should calculate zero for invalid x value', function () {
        document.getElementById('x').value = 'hello';
        document.getElementById('y').value = 2;
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('0');
    });
    it('should calculate zero for invalid y value', function () {
        document.getElementById('x').value = 1;
        document.getElementById('y').value = 'goodbye';
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('0');
    });
});