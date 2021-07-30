export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Zakaria',
        imageUri: require('../assets/images/me.png'),
	}, {
		id: 'u2',
		name: 'Hajar',
        imageUri: require('../assets/images/hajar.png'),
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, zakaria!',
		createdAt: '2021-07-30T14:48:00.000Z',
		user: {
			id: 'u1',
			name: 'zakaria',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2021-07-30T13:48:00.000Z',
		user: {
			id: 'u2',
			name: 'Hajar',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2021-07-30T14:30:00.000Z',
		user: {
			id: 'u2',
			name: 'Hajar',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2021-07-30T14:01:00.000Z',
		user: {
			id: 'u1',
			name: 'zakaria',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2021-07-30T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'zakaria',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2021-07-30T13:30:00.000Z',
		user: {
			id: 'u2',
			name: 'Hajar',
		},
	}, {
		id: 'm7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2021-07-30T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'zakaria',
		},
	}]
}