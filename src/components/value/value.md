Simple examples:

    <div>
      <span style={{marginRight: '2rem'}} title="Only value supplied">
        <Value value={ -1.4444 } />
      </span>
      <span style={{marginRight: '2rem'}} title="Custom amount of decimals, set with decimals">
        <Value value={ 2.4444 } decimals={ 3 } />
      </span>
      <span style={{marginRight: '2rem'}} title="Custom amount of decimals, with min and max decimals">
        <Value value={ -3.4444 } minDecimals={ 6 } maxDecimals={ 8 } />
      </span>
      <span style={{marginRight: '2rem'}} title="Custom amount of decimals, with min and max decimals">
        <Value value={ -4.5678 } maxDecimals={ 1 } minDecimals={ 0 } />
      </span>
      <span style={{marginRight: '2rem'}} title="With prefix and prefixSeparator">
        <Value prefix="Value:" prefixSeparator=" " value={ 2.4444 } />
      </span>
      <span style={{marginRight: '2rem'}} title="Invalid value with handling">
        <Value useDashForInvalidValues value={ Number.NEGATIVE_INFINITY } />
      </span>
      <span style={{marginRight: '2rem'}} title="Abbreviations">
        <Value value={ 1420000 } abbreviation="million"/>
      </span>
    </div>

Examples with ticks:

    const ticks = [{from_price: 0, to_price: 10, decimals: 4}, {from_price: 11, to_price: 100, decimals: 3}];

    <div>
      <span style={{marginRight: '2rem'}} title="Amount of decimals decided via ticks">
        <Value value={ 4.123456789 } ticks={ ticks } />
      </span>
      <span style={{marginRight: '2rem'}} title="Amount of decimals decided via ticks">
        <Value value={ 14.123456789 } ticks={ ticks } />
      </span>
    </div>

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
