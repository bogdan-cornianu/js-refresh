// 1
let myObject = {
    myMethod: function () {
      console.log(this);
    }
  };

//   myObject.myMethod();


// 2
  myMethod = function () {
    console.log(this);
  };
  
  let myObject2 = {
    myMethod: myMethod
  };

  let myObject3 = {
    mm: 1
  }

//   myMethod();
//   myObject2.myMethod();
//   myMethod.call(myObject3);


// 3
  let myMethod = function () { 
    console.log(this.a);
  };
  
  let obj1 = {
    a: 2,
    myMethod: myMethod
  };
  
  let obj2 = {
    a: 3,
    myMethod: myMethod
  };
  
  obj1.myMethod(); // 2
  obj2.myMethod(); // 3
  
  obj1.myMethod.call( obj2 ); // 3
  obj2.myMethod.call( obj1 ); // 2


  // 4
  function foo(something) {
    this.a = something;
  }
  
  let obj11 = {};
  
  let bar = foo.bind( obj11 );
  bar( 2 );
  console.log( obj11.a )