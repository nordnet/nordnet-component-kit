Simple examples:

    initialState = { updateable: 27 };

    <div>
      <style
        dangerouslySetInnerHTML={{ __html: `
          .update {
            animation: wink 0.5s ease;
          }

          @keyframes wink {
            from { color: rgba(0, 0, 0, 1); }
            40% { color: rgba(0, 0, 0, 0.5); }
            50% { color: rgba(0, 0, 0, 0.7); }
            60% { color: rgba(0, 0, 0, 0.9); }
            to { color: rgba(0, 0, 0, 1); }
          }
        `}}
      />
      <button onClick={() => setInterval(() => setState({ updateable: Math.random() }), 2000)}>Test Update Classes</button><br/><br/>
      <span style={{marginRight: '2rem'}} title="Only value supplied">
        <Value value={ state.updateable } updateable />
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
