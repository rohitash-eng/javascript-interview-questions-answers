//  group by tags, using reducer
var persons = [
  {id : 1, name : "John", tags : "javascript"},
  {id : 2, name : "Alice", tags : "javascript"},
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];
const result = persons.reduce((previous, obj) => {
    if(!previous[obj.tags]){
      previous[obj.tags] = [];
    }
    previous[obj.tags].push(obj);
    return previous;
},{});
console.log('group by tags, using reducer', result);
// group by tags, without reducer

const groups = {};
persons.forEach(person => {
  if(!groups[person.tags]){
    groups[person.tags] = [];
  }
  groups[person.tags].push(person);
});
console.log("group by tags, without reducer =",groups);
