import {Geo, Address, Company, User, RxGeo, RxAddress, RxCompany, RxUser, UserTable} from "../services/interfaces";

function adaptGeo(RxGeoData: RxGeo): Geo {
	return {
		lat: RxGeoData.lat,
		lng: RxGeoData.lng,
	};
}

function adaptAddress(RxAddressData: RxAddress): Address {
	return {
		street: RxAddressData.street,
		suite: RxAddressData.suite,
		city: RxAddressData.city,
		zipcode: RxAddressData.zipcode,
		geo: adaptGeo(RxAddressData.geo),
	};
}

function adaptCompany(RxCompanyData: RxCompany): Company {
	return {
		name: RxCompanyData.name,
		catchPhrase: RxCompanyData.catchPhrase,
		bs: RxCompanyData.bs,
	};
}

export function adaptUser(RxUsers: RxUser[]): User[] {
	const userList: User[] = [];

	for (const RxUserData of RxUsers) {
		userList.push({
			id: RxUserData.id,
			name: RxUserData.name,
			username: RxUserData.username,
			email: RxUserData.email,
			address: adaptAddress(RxUserData.address),
			phone: RxUserData.phone,
			website: RxUserData.website,
			company: adaptCompany(RxUserData.company),
		});
	}

	return userList;
}

function adaptGeoTable(RxGeoData: RxGeo): string {
	return RxGeoData.lat + ', ' + RxGeoData.lng;
}

function adaptAddressTable(RxAddressData: RxAddress): string {

	var addr = '';
	addr += RxAddressData.street + ', ';
	addr += RxAddressData.suite + ', ';
	addr += RxAddressData.city + ', ';
	addr += RxAddressData.zipcode;
	// addr += adaptGeoTable(RxAddressData.geo);

	return addr;
}

function adaptCompanyTable(RxCompanyData: RxCompany): string {

	var comp = '';
	comp += RxCompanyData.name + '\n';
	// comp += RxCompanyData.catchPhrase + '\n';
	// comp += RxCompanyData.bs;

	return comp;
}

export function adaptUserTable(RxUsers: RxUser[]): UserTable[] {
	const userTableList: UserTable[] = [];

	for (const RxUserData of RxUsers) {
		userTableList.push({
			id: RxUserData.id,
			name: RxUserData.name,
			username: RxUserData.username,
			email: RxUserData.email,
			address: adaptAddressTable(RxUserData.address),
			phone: RxUserData.phone,
			website: RxUserData.website,
			company: adaptCompanyTable(RxUserData.company),
		});
	}

	return userTableList;
}
