export interface Geo {
	lat: string,
	lng: string,
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

export interface Company {
	name: string,
	catchPhrase: string,
	bs: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

export interface rxGeo {
  lat: string,
  lng: string,
}

export interface rxAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

export interface rxCompany {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface rxUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

export interface UserList {
  users: User[],
}

