Basic example:

	<DateTime value={ new Date() } />

Basic example with iso date showing to minutes:

	<DateTime value={ new Date() } iso minute="numeric" />

Example showing human format for date:

	<DateTime value={ 19234829847289 } format="human" />

Example showing numeric format for date:

	<DateTime value={ 19234829847289 } format="numeric" type="date" />

Example showing human format for relative:

	<DateTime value={ (new Date() - 24 * 60 * 60 * 1000) } format="human" type="relative" />

Example showing numeric format for relative:

	<DateTime value={ (new Date() - 24 * 60 * 60 * 1000) } format="numeric" type="relative" />
