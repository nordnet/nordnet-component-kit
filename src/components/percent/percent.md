Basic examples:

    <div>
      <span style={{marginRight: '2rem'}} title="Only value supplied">
        <Percent value={ 2.4444 } />
      </span>
      <span style={{marginRight: '2rem'}} title="Custom amount of decimals">
        <Percent value={ -1.4444 } decimals={ 3 } />
      </span>
      <span style={{marginRight: '2rem'}} title="With suffixSeparator">
        <Percent value={ -5.4444 } decimals={ 2 } suffixSeparator=" " />
      </span>
      <span style={{marginRight: '2rem'}} title="Another with suffixSeparator">
        <Percent value={ 1134.2334 } decimals={ 2 } suffixSeparator="____" />
      </span>
      <span style={{marginRight: '2rem'}} title="Undefined value with handling">
        <Percent nonNumberAsDash value={ undefined } />
      </span>

    </div>
