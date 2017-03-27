# A basic example
    const account = { name: 'Nice account', type: 'ISK', accno: 123123123, amount: 300, currency: 'SEK', change: 0.25 };
      <IconRow
        minHeight={'9rem'}
        key={account.accno}
        iconComponent={'string'}
        topLeftComponent={(<h1 style={{margin: 0}}>{account.name}</h1>)}
        bottomLeftComponent={(<div>{account.accno}</div>)}
        topRightComponent={(
          <Currency
            value={account.amount}
            suffix={account.currency}
            decimals={0}
            suffixSize="small"
          />
        )}
        bottomRightComponent={(<Percent value={ account.change } />)}
      />

# A basic example in a BasicList
      const accounts = [
        { name: 'Nice account', type: 'ISK', accno: 123123123, bankAccountNo: '9100 9129 299', amount: 300, currency: 'SEK', change: 3.25 },
        { name: 'Pension', type: 'AF', accno: 123281821, bankAccountNo: '9100 1234 223', amount: 9299, currency: 'SEK', change: -0.32 },
        { name: 'Galna investeringar', type: 'KF', accno: 239239239, bankAccountNo: '9100 5644 776', amount: 1337, currency: 'USD', change: 2.12 },
      ];

      <ul>
        {accounts.map((account, index) => (
          <IconRow
            iconComponent={<img src={`http://placekitten.com/452/450?image=${index + 1}`} style={{maxWidth: '60px', borderRadius: '30px'}}/>}
            minHeight={'7rem'}
            key={account.accno}
            textIconText={account.type}
            topLeftComponent={(<div>{account.name}</div>)}
            bottomLeftComponent={(<div>{account.accno}</div>)}
            topRightComponent={(
              <Currency
                value={account.amount}
                suffix={account.currency}
                decimals={0}
                suffixSize="small"
              />
            )}
            bottomRightComponent={(<Percent value={ account.change } />)}
          />
        ))}
      </ul>
