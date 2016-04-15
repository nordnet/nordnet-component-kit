# Nordnet Component Kit

## Installation
TODO once this is in sinopia this is true, until then - not so much!

```
npm install --save nordnet-component-kit
```

## Usage
```javascript
import { Percent, Currency } from 'nordnet-component-kit';

// ... some code

<Percent value={ 0.23 } decimals={ 1 } />
<Currency value={ 45.345 } currency="SEK" />
```

## Documentation
For examples and full documentation see [examples/documentation](examples/documentation)
To run the documentation locally, to this:
```bash
# Go to the documentation directory
cd examples/documentation
# Link your local nordnet-component-kit
npm link nordnet-component-kit ../..
# Install dependancies
npm install
# Run the documentation
npm start
```

## Components
For some examples usages for each component, please see the Documentation section above.

### Number components
All of the components in this section use an underlying component `<Number />`. All props sent to either of these components are propagated down to Number, which means that all components also can take the props specified in Number.

#### Number
**In use:**
This component is *not* exported to public and is only here because of the above text.

The `<Number />` component takes the following props:
- `className`
- `value`
- `valueClass`
- `valueDecimals`: *default: 2*
- `prefix`: either *string* or *node*
- `prefixClass`:
- `prefixSeparator`: *default: ''*
- `suffix`: either *string* or *node*
- `suffixClass`
- `suffixSeparator`: *default: ''*

#### Currency
**In use:**
```javascript
<Currency value={ 34.4442 } decimals={ 2 } currency="DKK" />
```

The `<Currency />` component takes the following props:
- `value`: **required**
- `currency`: syntactic sugar for `suffix`
- `suffix`: can be used interchangeably with `currency`.
- `suffixClass`
- `suffixSeparator`: *default: ' '*
- `suffixSize`: *default: 'normal'*, can take either 'normal' or 'small'
- `decimals`: *default: 2*
