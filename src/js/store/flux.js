const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			locations: [
				{
					title: "Impala Hotel",
					address: "1228 Collins Ave, Miami Beach, FL, 33139",
					placeid: "hotel1",
					fenced: true,
					id: 0,
					location: [{ lat: 25.783416, lng: -80.1336388 }],

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
					fenced: false,
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
					id: 0,
					firstname: "John",
					lastname: "Smith",
					userid: "doglover1",
					password: "alpha",
					//image: "#",
					//dogtype: "terrier",
					email: "doglover1@gmail.com",
					favorites: [
						{
							title: "Impala Hotel",
							address: "1228 Collins Ave, Miami Beach, FL, 33139",
							placeid: "hotel1",
							fenced: "yes",
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
							fenced: "no",
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
					ratings: [
						{
							placeid: "#",
							value: 3
						}
					]
				},
				{
					id: 1,
					firstname: "Jane",
					lastname: "Doe",
					userid: "doglover2",
					password: "bravo",
					//image: "#",
					//dogtype: "bulldog",
					email: "doglover2@gmail.com",
					ratings: [
						{
							placeid: "#",
							value: 4
						}
					]
				}
			],
			token: [],
			showmodal: false,
			filterbutton: false,
			currentUser: []
		},

		actions: {
			// loginUser: (username, pword) => {
			// 	const store = getStore();

			// 	store.users.map((name, index) => {
			// 		if (name.userid === username && name.password === pword) {
			// 			console.log("good"), setStore({ loggedInUser: name }), console.log(store.logge);
			// 		} else console.log("bad");
			// 	});
			// },
			login: (username, pword) => {
				fetch("https://3000-c9583594-5276-4389-a803-7a1da07840d4.ws-us02.gitpod.io/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: username,
						password: pword
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							// Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt, currentUser: token });
							const store = getStore();
							// history.push("/dashboard");
						}
					});
			},

			logout: () => {
				setStore({ token: [] });
			},
			editprofile: (firstname, lastname, email, username) => {
				const store = getStore();
				store.users.map((user, index) => {
					if (user.id === store.loggedInUser.id) {
						let editedStore = store.users
							.slice(0, index)

							.concat({
								...store.users[index],
								firstname,
								email: email,
								lastname: lastname,
								username: username
							})
							.concat(store.users.slice(index + 1));
						setStore({ users: editedStore });
						setStore({ loggedInUser: store.users[index] });
						console.log(store.users);
					}
				});
			},
			filterbutton: () => {
				let store = getStore();
				if (store.filterbutton === false) {
					setStore({ filterbutton: true });
				} else setStore({ filterbutton: false });
			},
			fetchlocations: () => {
				const store = getStore();
				const url = "https://3000-c9583594-5276-4389-a803-7a1da07840d4.ws-us02.gitpod.io/location";
				let response1 = fetch(url, {
					method: "Get"
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						setStore({ locations: data });
					});
			}
		}
	};
};

export default getState;
