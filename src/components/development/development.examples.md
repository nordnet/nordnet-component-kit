Basic example:

    <Development value={ 9.2333 } decimals={ 4 } />

Basic example with negative development:

    <Development value={ -112.2334 } decimals={ 2 } />

Example with development percent:

    <Development value={ 2.2333 } type="percentage" />

Example with development currency:

    <Development
      value={ -1.2334 }
      type="currency"
      currency="SEK"
      suffixSize="small"
    />

Example with development currency and direction:

    <Development
      value={ 1.2334 }
      type="currency"
      currency="SEK"
      suffixSize="small"
      direction="negative"
    />
