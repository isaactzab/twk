# TWC (Tailwind CSS Organizer for React)

TWC (Tailwind CSS Organizer for React) is a utility library designed to simplify the organization of Tailwind CSS classes for React components. With TWC, you can define a structured object representing different prefixes for your classes, making it easier to manage and maintain complex class compositions.

## Installation

You can install TWC via npm:

```bash
npm install twc
```

or using yarn:

```bash
yarn add twc
```

## How it Works

The main function `twc()` takes an object as input, which represents the class prefixes for various elements. Each element in the object can have multiple levels of nesting, allowing for granular control over class organization. Additionally, elements with the key `"default"` represent classes that don't require any additional prefixes, except for inherited ones.

## Example

```javascript
import { twc } from 'twc';

const classes = {
  button: {
    default: 'bg-blue-500 text-white',
    dark: 'rounded-lg px-4 py-2', // Button specific classes
    hover: 'border border-blue-500', // Button specific classes
  },
  input: {
    default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    small: 'text-sm py-1 px-2', // Input specific classes
    large: 'text-lg py-2 px-4', // Input specific classes
  },
};

const buttonClasses = twc(classes.button); // Prefix all classes for buttons with 'btn:'

console.log(buttonClasses);
// Output: 'bg-blue-500 text-white dark:rounded-lg dark:px-4 dark:py-2 hover:border hover:border-blue-500'

```

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

TWC is licensed under the MIT License. See the [LICENSE](link-to-license) file for details.
