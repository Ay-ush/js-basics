// write a js function that check if user is allowed access or not based on the role
//result boolean

//test case
//userRole={'user'}
//sysRole={'admin','manager'}
//result false;

//test case
//userRole={'user','receptionist'}
//sysRole={'admin','receptionist'}
//result true;

const userRole = () => {
  if ((userRole = "user")) return false;
  else userRole = "user" && "receptionist";
  return true;
};

const sysRole = () => {
  if ((sysRole = "admin" && "manager")) return false;
  else sysRole = "admin" && "receptionist";
  return true;
};

//real world pagination
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page = 2;
const limit = 2;
const pagination = ({ data, page = 1, limit = 5 }) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return data.slice(start, end);
};
console.log(pagination({ data, page, limit }));

//search
const users = [{ name: "raktim" }, { name: "ram" }, { name: "rita" }];
//user type ra =>[{name:"raktim"},{name:"ram"}]
const user1 = ({ data, search }) =>
  data.filter((item) => item.name.includes(search));

// function user1(a, b) {
//   return a.filter((x) => x.toLowerCase().includesx(b.toLowerCase()));
// }
console.log(user1({ data: users, search: "ra" }));

//immutable JS
