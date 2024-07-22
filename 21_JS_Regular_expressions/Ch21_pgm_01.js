// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

const isValidVariable = (str) => {
    const pattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return pattern.test(str);
  };
  
  console.log(isValidVariable('first_name')); 
  console.log(isValidVariable('first-name')); 
  console.log(isValidVariable('1first_name')); 
  console.log(isValidVariable('firstname')); 