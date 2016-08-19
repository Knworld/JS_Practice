var Person = function (firstAndLast) {
    firstAndLast = firstAndLast || '';
    var nameArr = firstAndLast.split(' ');
    var firstName = nameArr[0];
    var lastName = nameArr[1];
    var fullName = firstName + ' ' + lastName;


    function update(){
      fullName = firstName + ' ' + lastName;
    }

    this.getFirstName = function(){
        return firstName;
    }

    this.getLastName = function(){
        return lastName;
    }

    this.getFullName = function(){
        return fullName;
    }

    this.setFirstName = function(name){
        firstName = name;
        update();
    }

    this.setLastName = function(last){
        lastName = last;
        update();
    }

    this.setFullName = function(full){
        nameArr = full.split(' ');
        firstName = nameArr[0];
        lastName = nameArr[1];
        fullName = full;

    }

};


var bob = new Person('Bob Ross');
bob.setFullName('what this');
console.log(bob.getFirstName());
console.log(Object.keys(bob).length);

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};

var test = new MyObject('kn', 'test');
console.log(test.name);
