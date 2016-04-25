Basic example:

	<Currency value={ 9.2333 } currency="EUR" />

Example with suffix instead of currency, with decimals and small suffixSize:

	<Currency value={ 1134.2334 } suffix="SEK" decimals={ 3 } suffixSize="small" />

Example with big suffixSize:

	<Currency value={ 9.2333 } currency="EUR" decimals={ 4 } suffixSize="normal" />

Example with suffixSeparator:

	<Currency value={ 134.2334 } currency="DKK" decimals={ 3 } suffixSeparator="_" />
