//When to use spread operator?
//2. To copy array
const students = ['Sarah', 'Fatih', 'Fariq'];
const students1 = students; //we cannot copy like this, as we are making reference like this to the main var or array. Go to 281 for real copy method
students1[0] = 'Adrian';
console.log(students1); //try console.log(students). This will also change
