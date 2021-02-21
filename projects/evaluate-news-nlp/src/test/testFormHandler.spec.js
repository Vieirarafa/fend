import { handleSubmit } from '../client/js/formHandler'


describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Testing the function handleSubmit(), it should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof handleSubmit).toBe("function");
    });
});