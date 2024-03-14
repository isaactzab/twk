# TWK (Before known as twc)

TWK (Before known as twc) is a utility library designed to simplify the organization of Tailwind CSS classes for React components. With TWK, you can define a structured object representing different prefixes for your classes, making it easier to manage and maintain complex class compositions.

## Installation

You can install TWK via npm:

```bash
npm install twk
```

or using yarn:

```bash
yarn add twk
```

## How it Works

The main function `twk()` takes an object as input, which represents the class prefixes for various elements. Each element in the object can have multiple levels of nesting, allowing for granular control over class organization. Additionally, elements with the key `"default"` represent classes that don't require any additional prefixes, except for inherited ones.

## Example

```javascript
import { twk } from 'twk';

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

const buttonClasses = twk(classes.button); // Prefix all classes for buttons with 'btn:'

console.log(buttonClasses);
// Output: 'bg-blue-500 text-white dark:rounded-lg dark:px-4 dark:py-2 hover:border hover:border-blue-500'
```


## Using in react

Used directly in the html element classname property

```javascript
import React from 'react'
import { twk } from 'twk';

function MyCustomButton() {

  return (
    <button className={twk({
        default: 'bg-blue-500 text-white',
        dark: 'rounded-lg px-4 py-2',
        hover: 'border border-blue-500',
    })}>Custom Button</button>
  )
}
```

Used by defining the classes in a constant
```javascript
import React from 'react'
import { twk } from 'twk';

const customButtonClasses = {
    default: 'bg-blue-500 text-white',
    dark: 'rounded-lg px-4 py-2',
    hover: 'border border-blue-500',
}

function MyCustomButton() {

  return (<>
        <button className={twk(customButtonClasses)}>Custom Button</button>
        <button className={twk(customButtonClasses)}>Custom Button1</button>
        <button className={twk(customButtonClasses)}>Custom Button2</button>
    </>
  )
}
```

Used by isolating the classes object in an external import.
```javascript
import React from 'react'
import { twk } from 'twk';
import { customButtonClasses } from './constants/classes';

function MyCustomButton() {

  return (<>
        <button className={twk(customButtonClasses)}>Custom Button</button>
        <button className={twk(customButtonClasses)}>Custom Button1</button>
        <button className={twk(customButtonClasses)}>Custom Button2</button>
    </>
}

```

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

TWK is licensed under the MIT License. See the [LICENSE](link-to-license) file for details.
