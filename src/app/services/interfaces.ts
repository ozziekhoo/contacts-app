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

export interface RxGeo {
  lat: string,
  lng: string,
}

export interface RxAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

export interface RxCompany {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface RxUser {
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

export interface UserTable {
  id: number,
  name: string,
  username: string,
  email: string,
  address: string,
  phone: string,
  website: string,
  company: string,
}

export interface UserTableList {
  users: UserTable[],
}
