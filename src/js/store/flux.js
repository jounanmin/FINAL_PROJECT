const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			locations: [
				{
					title: "Impala Hotel",
					address: "1228 Collins Ave, Miami Beach, FL, 33139",
					placeid: "hotel1",
					fenced: "no",
					id: 0,
					location: [
						{
							lat: 25.783416,
							lng: -80.1336388
						}
					],

					background: "white",
					initial: "white",
					places: [
						{
							name: "Impala Hotel,",
							address: "1228 Collins Ave, Miami Beach, FL, 33139",
							ratings: [
								{
									userid: "doglover1",
									value: "3"
								}
							]
						}
					]
				},
				{
					title: "The St. Regis Bal Harbour Resort",
					placeid: "hotel2",
					fenced: "yes",
					id: 1,
					location: [
						{
							lat: 25.8888332,
							lng: -80.124721
						}
					],

					background: "white",
					initial: "white",
					address: "9703 Collins Avenue, Bal Harbour, FL, 33154",
					places: [
						{
							name: "The St. Regis Bal Harbour Resort",
							address: "9703 Collins Avenue, Bal Harbour, FL, 33154",
							ratings: [
								{
									userid: "doglover2",
									value: "4"
								}
							]
						}
					]
				}
			],

			users: [
				{
					userid: "doglover1",
					password: "alpha",
					image: "#",
					dogtype: "terrier",
					email: "doglover1@gmail.com",

					ratings: [
						{
							placeid: "#",
							value: 3
						}
					]
				},
				{
					userid: "doglover2",
					password: "bravo",
					image: "#",
					dogtype: "bulldog",
					email: "doglover2@gmail.com",
					ratings: [
						{
							placeid: "#",
							value: 4
						}
					]
				}
			],
			loggedInUser: [],
			modal: false
		},

		actions: {
			loginUser: (username, pword) => {
				const store = getStore();

				store.users.map((name, index) => {
					if (name.userid === username && name.password === pword) {
						console.log("good"), setStore({ loggedInUser: name }), console.log(store.logge);
					} else console.log("bad");
				});
			},
			logout: () => {
				setStore({ loggedInUser: [] });
			}
		}
	};
};

export default getState;
