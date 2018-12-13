Basic examples:

    <div>
      <span style={{marginRight: '2rem'}} title="Positive with 4 decimals">
        <Development value={ 9.2 } decimals={ 4 } />
      </span>
      <span style={{marginRight: '2rem'}} title="Negative with 2 decimals">
        <Development value={ -9.2333 } decimals={ 2 } />
      </span>
      <span style={{marginRight: '2rem'}} title="Neutral with 3 decimals">
        <Development value={ 0 } decimals={ 3 } />
      </span>
      <span style={{marginRight: '2rem'}} title="Invalid value with handling">
        <Development useDashForInvalidValues value={ Number.POSITIVE_INFINITY } />
      </span>
    </div>

Examples with ticks:

    const ticks = [{from_price: 0, to_price: 10, decimals: 4}, {from_price: 11, to_price: 100, decimals: 3}];

    <div>
      <span style={{marginRight: '2rem'}} title="Amount of decimals decided via ticks">
        <Development value={ 4.123456789 } ticks={ ticks } />
      </span>
      <span style={{marginRight: '2rem'}} title="Amount of decimals decided via ticks">
        <Development value={ 14.123456789 } ticks={ ticks } />
      </span>
    </div>

Example with other types:

    <div>
      <span style={{marginRight: '2rem'}} title="Type percentage">
        <Development value={ 2.2333 } type="percentage" />
      </span>
      <span style={{marginRight: '2rem'}} title="Type currency">
        <Development
          value={ -1.2334 }
          type="currency"
          currency="SEK"
          suffixSize="small"
        />
      </span>
    </div>

Example with neutral values:

    <div>
      <span style={{marignRight: '2rem'}} title="Neutral value with negligible positive development">
        <Development value={0.01} decimals={1} />
      </span>
    </div>

Advanced examples:

    <div>
      <span style={{marginRight: '2rem'}} title="Overwrite direction">
        <Development value={ 9.2 } direction="negative" />
      </span>
      <span style={{marginRight: '2rem'}} title="Neutral with 3 decimals">
        <Development value={ 0 } decimals={ 3 } />
      </span>
      <span style={{marginRight: '2rem', color: '#00BD76'}} title="Positive with color, style with class 'number--positive'">
        <Development value={ 34.566544 } direction="positive" />
      </span>
      <span style={{marginRight: '2rem', color: '#EF472F'}} title="Negative with color, style with class 'number--negative'">
        <Development value={ 8443.345334 } direction="negative" />
      </span>
      <span style={{marginRight: '2rem', color: '#C8C8C8'}} title="Neutral with color, style with class 'number--neutral'">
        <Development value={ 42.3444 } direction="neutral"/>
      </span>
    </div>

Override colors examples:

    const customColors = {
      positiveColor: 'cornflowerblue',
      negativeColor: 'tomato',
      neutralColor: 'rebeccapurple',
    };

    <div>
      <span style={{marginRight: '2rem'}}>
        <Development value={ 9.2 } {...customColors} />
      </span>
      <span style={{marginRight: '2rem'}}>
        <Development value={ -11.4 } {...customColors} />
      </span>
    </div>

Override colors with classes examples:

    <div>
      <style>{`
      .gold {
        color: gold;
      }

      .silver {
        color: silver;
      }

      .brown {
        color: brown;
      }

      `}</style>
      <span style={{marginRight: '2rem'}}>
        <Development className="gold" value={ 9.2 } />
      </span>
      <span style={{marginRight: '2rem'}}>
        <Development className="silver" value={ -11.4 } />
      </span>
      <span style={{marginRight: '2rem'}}>
        <Development className="brown" value={ 100.0 } />
      </span>
    </div>
