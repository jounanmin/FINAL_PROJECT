const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "Impala Hotel",
					background: "white",
					initial: "white",
					places: [
						{
							name: "Impala Hotel,",
							address: "1228 Collins Ave, Miami Beach, FL, 33139, United States of America",
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
					background: "white",
					initial: "white",
					places: [
						{
							name: "The St. Regis Bal Harbour Resort",
							address: "9703 Collins Avenue, Bal Harbour, FL, 33154, United States of America",
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
			rating: [
				{
					ratings: [
						{
							placeid: "hotel1",
							ratings: [
								{
									placeid: "#",
									value: 3
								}
							]
						}
					],
					ratings2: [
						{
							placeid: "hotel2",
							ratings: [
								{
									placeid: "#",
									value: 4
								}
							]
						}
					]
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
