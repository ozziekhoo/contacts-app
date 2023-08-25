import {Geo, Address, Company, User, rxGeo, rxAddress, rxCompany, rxUser} from "../services/interfaces";

function adaptGeo(rxGeoData: rxGeo): Geo {
	return {
		lat: rxGeoData.lat,
		lng: rxGeoData.lng,
	};
}

function adaptAddress(rxAddressData: rxAddress): Address {
	return {
		street: rxAddressData.street,
		suite: rxAddressData.suite,
		city: rxAddressData.city,
		zipcode: rxAddressData.zipcode,
		geo: adaptGeo(rxAddressData.geo),
	};
}

function adaptCompany(rxCompanyData: rxCompany): Company {
	return {
		name: rxCompanyData.name,
		catchPhrase: rxCompanyData.catchPhrase,
		bs: rxCompanyData.bs,
	};
}


export function adaptUser(rxUsers: rxUser[]): User[] {
	const userList: User[] = [];

	for (const rxUserData of rxUsers) {
		userList.push({
			id: rxUserData.id,
			name: rxUserData.name,
			username: rxUserData.username,
			email: rxUserData.email,
			address: adaptAddress(rxUserData.address),
			phone: rxUserData.phone,
			website: rxUserData.website,
			company: adaptCompany(rxUserData.company),
		});
	}

	return userList;
}
