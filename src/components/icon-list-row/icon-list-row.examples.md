# A basic example
    const iconStyles = {
      color: 'white',
      width: 55,
      height: 55,
      borderRadius: (55 / 2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4C4A56',
    };
    const account = { name: 'Nice account', type: 'ISK', accno: 123123123, amount: 300, currency: 'SEK', change: 0.25 };
      <IconListRow minHeight={'70px'} key={account.accno}>
        <div style={iconStyles}>{account.type}</div>
        <div>{account.name}</div>
        <div>{account.accno}</div>
        <div>{account.amount}{' '}{account.currency}</div>
        <div>{account.change * 100}{'%'}</div>
      </IconListRow>

# A basic example in a BasicList
    const iconStyles = {
      color: 'white',
      width: 45,
      height: 45,
      borderRadius: (45 / 2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4C4A56',
    };
    const accounts = [
      { name: 'Nice account', type: 'ISK', accno: 123123123, bankAccountNo: '9100 9129 299', amount: 300, currency: 'SEK', change: 3.25 },
      { name: 'Pension', type: 'AF', accno: 123281821, bankAccountNo: '9100 1234 223', amount: 9299, currency: 'SEK', change: -0.32 },
      { name: 'Galna investeringar', type: 'KF', accno: 239239239, bankAccountNo: '9100 5644 776', amount: 1337, currency: 'USD', change: 2.12 },
    ];
    <BasicList>
      {accounts.map(account => (
        <IconListRow key={account.accno}>
          <div style={iconStyles}>{account.type}</div>
          <h1 style={{marginTop: 0, marginBottom: 0, fontSize: '2.5rem'}}>{account.name}</h1>
          <span style={{color: '#A2A2A2', fontWeight: 100}}>{account.accno} - Account: {account.bankAccountNo}</span>
          <Currency
            value={account.amount}
            suffix={account.currency}
            decimals={0}
            suffixSize="small"
          />
          <Percent value={ account.change } />
        </IconListRow>
      ))}
    </BasicList>
