//project=18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Seeing the World: Think of at least five places in the world you’d like to visit.
//making array of mountains name
var countriesToVisit = ["Maldives ", "Saudi arabia", "China ", "America"];
//printing the message list
console.log("list of mountain name");
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its Orgianl onder 
console.log("Still in orginal order", countriesToVisit);
// Print the Array in Reversed order without modifying the actual Array List 
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its Orgianl order
console.log("still in Orginal Onder:", countriesToVisit);
// we have Changed the Orginal array Order Now 
console.log("Orginal Array leversed:", countriesToVisit.reverse());
// Print the array to show that it's back to its orginal order 
console.log("Back to Orgian) Order:", countriesToVisit.reverse());
//Print the array to show that its order has been changed in Alphabetical order now 
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());
// We have Changed again the Orginal Array Order Now in reverse onder 
console.log("Orginal Array Reversed again:", countriesToVisit.reverse());
