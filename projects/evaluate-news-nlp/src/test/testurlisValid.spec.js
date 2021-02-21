import {isUrlValid} from '../client/js/urlIsValid'

describe('Testing the function isUrlValid(), it should exist' , () => {
    test('It should be defined', () => {
        expect(isUrlValid).toBeDefined();
    })
});
describe('Testing the function isUrlValid(), it should be a function' , () => {
    test('It should be a function',() => {
        expect(typeof isUrlValid).toBe("function");
    })
});

describe('Testing the function isUrlValid(), for valid url' , () => {
    var url = "https://jestjs.io/docs/en/using-matchers";
    test('It should return true',() => {
        const result = isUrlValid(url);
        expect(result).toBeTruthy();
    })
});
describe('Testing the function isUrlValid(), for invalid url' , () => {
    var url = "agdhttps://jestjs.io/docs/en/using-matchers";
    test('It should return false', () => {
        const result = isUrlValid(url);
        expect(result).not.toBeTruthy();
    })
});