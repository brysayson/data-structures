var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.previous = null;

  list.addToTail = function(value) {

console.log(value);

    list.tail = new Node(value);

    if (list.head === null) {
      list.head = list.tail;
    } else {
      var current = list.head;
      while (current.next) {
        current = current.next;
      }
      current.next = list.tail;
    }
  };

  list.removeHead = function() {
    console.log(list.head);
    var returnedHead = list.head;
    list.head = list.head.next;
    return returnedHead.value;
  };

  list.contains = function(target) {
    function searchHeads(searchthisHead) {
      var returnBoolean;
      if (searchthisHead.value === target) {
        returnBoolean = true;
      } else {
        if (searchthisHead.next === null ) {
          returnBoolean = false;
        } else {
          returnBoolean = searchHeads(searchthisHead.next);
        }
      }
      return returnBoolean;
    }
    return searchHeads(list.head);
  };

  list.addToHead = function(value) {
    
    var newHead = new Node( value );
    
    if (list.head === null && list.tail === null) {
      list.head = list.tail = newHead;
    } else {
      newHead.next = list.head;
      list.head = newHead;
      newHead.previous = list.head;
    }
  
    // list.head.next should point to previous head
    // // new node value  
    // var previousHead = list.head;
    // list.head = new Node(value);
    // list.head.next = previousHead;

  };
  list.removeTail = function(value) {
    console.log(list.head);
};


return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// function insertAfter(Node node, Node newNode) // insert newNode after node
//     newNode.next := node.next
//     node.next    := newNode

// searchNodes (node)

// searchNodes (node.children)

//////////////////// COPY ////////////////////////


// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value) {

//     list.tail = new Node(value);

//     if (list.head === null) {
//       list.head = list.tail;
//     } else {
//       var current = list.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = list.tail;
//     }

//   };

//   list.removeHead = function() {
//     var returnedHead = list.head;

//     list.head = list.head.next;

//     return returnedHead.value;

//   };

//   list.contains = function(target) {

//     function searchHeads(searchthisHead) {
//       var returnBoolean;
//       if (searchthisHead.value === target) {
//         returnBoolean = true;
//       } else {
//         if (searchthisHead.next === null ) {
//           returnBoolean = false;
//         } else {
//           returnBoolean = searchHeads(searchthisHead.next);
//         }
//       }
//       return returnBoolean;
//     };
//     return searchHeads(list.head);
//   }

//   return list;
// }

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

// // function insertAfter(Node node, Node newNode) // insert newNode after node
// //     newNode.next := node.next
// //     node.next    := newNode

// // searchNodes (node)

// // searchNodes (node.children)
