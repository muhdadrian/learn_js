//object destructuring
//we do team for web development project
const team = {
  pm: 'Adrian',
  frontEnd1: 'Hafizah',
  frontEnd2: 'Sarah',
  backEnd: 'Fatih',
  ux: 'Fariq',
  devOps: 'Baby',
};
1;

//to separate between pm and the rest of group members
const { pm, ...myTeam } = team;
console.log(pm);
console.log(myTeam);

//we can use rest parameter for object destructuring like ...myTeam
