import { twk } from '../index';

describe('valid object', () => {    
    let valid_class_object;  
    let valid_class_string;
    
    beforeAll(() => {
        valid_class_object = {
            default: 'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200',
            focus: 'outline-none z-10 ring-4 ring-gray-100',
            hover: 'bg-gray-100 text-blue-700',
            dark: {
                default: 'bg-gray-800 text-gray-400 border-gray-600',
                focus: 'ring-gray-700',
                hover: 'text-white bg-gray-700'
            }
    
        };
        valid_class_string = `py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:focus:ring-gray-700 dark:hover:text-white dark:hover:bg-gray-700`;
    });

    test('should match object output with class string', () => {
        expect( twk(valid_class_object) ).toBe(valid_class_string);
    })
});