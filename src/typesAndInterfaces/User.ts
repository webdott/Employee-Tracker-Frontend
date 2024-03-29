type User = {
	_id: string;
	firstname: string;
	othername: string;
	surname: string;
	email: string;
	fileno: string;
	account: string;
	address: string;
	agency: string;
	bank: string;
	cadre: string;
	certificateyear: string;
	confirmation: string;
	conraiss: string;
	department: string;
	designation: string;
	dob: string;
	firstappointment: string;
	gender: string;
	geozone: string;
	institution: string;
	ippis: string;
	lga: string;
	maritalstatus: string;
	nhf: string;
	nhis: string;
	pencomadmin: string;
	pencomnumber: string;
	phone: string;
	presentappointment: string;
	retirement: string;
	sn: string;
	sortcode: string;
	state: string;
	step: string;
	tin: string;
	[x: string]: string | number;
};

export type EmployeeDetailsValues = {
	_id: string; 
	firstname: string;
	othername: string;
	surname: string;
	email: string;
	fileno: string;
	account: string;
	address: string;
	agency: string;
	bank: string;
	cadre: string;
	certificateyear: string;
	confirmation: string;
	conraiss: string;
	department: string;
	designation: string;
	dob: string;
	firstappointment: string;
	gender: string;
	geozone: string;
	institution: string;
	ippis: string;
	lga: string;
	maritalstatus: string;
	nhf: string;
	nhis: string;
	pencomadmin: string;
	pencomnumber: string;
	phone: string;
	presentappointment: string;
	retirement: string;
	sortcode: string;
	state: string;
	step: string;
	tin: string;
};

export default User;
