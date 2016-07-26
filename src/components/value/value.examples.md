Simple example:

    <Value value={ 2.4444 } />

Example with custom decimals:

    <Value value={ 2.4444 } decimals={ 3 } />

Example with prefix & prefixSeparator:

    <Value prefix="Value:" prefixSeparator=" " value={ 2.4444 } />

Example of a more specific use case:

    <Value
      prefix="Amount:"
      prefixSeparator=" "
      value={ 2.4444 }
      suffix={
        <select>
          <option value="dollar">$</option>
          <option value="pound">£</option>
        </select>
      }
      suffixSeparator=" "
    />
