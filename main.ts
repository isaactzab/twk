import { twc } from 'twc';

const classes = {
  default: 'text-base font-semibold', // Default classes applicable to all elements
  button: {
    default: 'bg-blue-500 text-white',
    primary: 'rounded-lg px-4 py-2', // Button specific classes
    secondary: 'border border-blue-500', // Button specific classes
  },
  input: {
    default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    small: 'text-sm py-1 px-2', // Input specific classes
    large: 'text-lg py-2 px-4', // Input specific classes
  },
};

const buttonClasses = twc(classes, 'btn:'); // Prefix all classes for buttons with 'btn:'
const inputClasses = twc(classes, 'input:'); // Prefix all classes for inputs with 'input:'

console.log(buttonClasses);
// Output: 'text-base font-semibold bg-blue-500 text-white btn:primary rounded-lg px-4 py-2 btn:secondary border border-blue-500'

console.log(inputClasses);
// Output: 'text-base font-semibold border-gray-300 focus:border-blue-500 focus:ring-blue-500 input:small text-sm py-1 px-2 input:large text-lg py-2 px-4'