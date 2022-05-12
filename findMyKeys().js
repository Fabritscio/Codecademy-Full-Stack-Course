// Write your code here:
//Option 1
let findMyKeys = arr => arr.findIndex(word => {
    if (word === 'keys') {
      return word;
    }
  })
  
  //Option 2
  const findTyKeys = arr => arr.findIndex(word => word === 'gum');
  
  
  //Option 3
  const findWhyKeys = arr => arr.findIndex(item1 => item1 === 'receipt');
  
  // Feel free to comment out the code below to test your function
  
  const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
  
  console.log(findMyKeys(randomStuff))
  console.log(findTyKeys(randomStuff))
  console.log(findWhyKeys(randomStuff))
  // Should print 4