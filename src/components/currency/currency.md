Basic examples:

    <div>
      <span style={{marginRight: '2rem'}} title="Only value & currency supplied">
        <Currency value={ 9.2333 } currency="EUR" />
      </span>
      <span style={{marginRight: '2rem'}} title="Undefined value with handling">
        <Currency nonNumberAsDash value={ undefined } currency="EUR" />
      </span>
      <span style={{marginRight: '2rem'}} title="Normal suffixSize">
        <Currency
          value={ 9.2333 }
          currency="EUR"
          decimals={ 4 }
          suffixSize="normal"
        />
      </span>
      <span style={{marginRight: '2rem'}} title="Suffix instead of currency, and small suffixSize">
        <Currency
          value={ 1134.2334 }
          suffix="SEK"
          decimals={ 3 }
          suffixSize="small"
        />
      </span>
      <span style={{marginRight: '2rem'}} title="With suffixSeparator">
        <Currency
          value={ 134.2334 }
          currency="DKK"
          decimals={ 3 }
          suffixSeparator=" • "
        />
      </span>
    </div>

Examples with ticks:

    const ticks = [{from_price: 0, to_price: 10, decimals: 4}, {from_price: 11, to_price: 100, decimals: 3}];

    <div>
      <span style={{marginRight: '2rem'}} title="Amount of decimals decided via ticks">
        <Currency value={ 4.123456789 } currency="EUR" ticks={ ticks } />
      </span>
      <span style={{marginRight: '2rem'}} title="Amount of decimals decided via ticks">
        <Currency value={ 44.123456789 } currency="EUR" ticks={ ticks } />
      </span>
    </div>
