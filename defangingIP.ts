// Solution 1 - Built func
const defangIPaddr = (address: string): string => {
  return address.replaceAll(".", "[.]");
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));

// Solution 2 - Iterative approach
const defangIPaddr2 = (address: string): string => {
  let defangedIPAddress = "";
  for (let i = 0; i < address.length; i++) {
    defangedIPAddress = defangedIPAddress.concat(
      address[i] === "." ? "[.]" : address[i]
    );
  }
  return defangedIPAddress;
};

console.log(defangIPaddr2("1.1.1.1"));
console.log(defangIPaddr2("255.100.50.0"));
