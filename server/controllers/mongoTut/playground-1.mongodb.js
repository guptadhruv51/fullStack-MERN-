/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();


// db.collection_name.action
// select * from table_name;
db.sales.find()

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);



//filter: where clause 
//projection: select columns you need not to show by adding a 0 in front of them 
db.sales.find(
  {item:'abc'},
  {_id:0,date:0}
);


// comparison operator

/**
 * $gt- >
 * $lt- <
 * $eq- equals
 * $lte - less than or equal to <=
 * $gte - >=
 *  $or :[{condition1},{condition2}]
 *  $and :[{condition1},{condition2}]
 */

db.sales.find({price:{$eq:5}});

db.sales.find(
  {
    $or:[
      {item:'abc'},
      {item:'def'},
      {quantity:{$gte:5}}
    ]
  }
)

// Same as $and 
//always returns an array 
db.sales.find(
  {
    item:"abc",
    quantity:{$gte:5}
  }
)

//returns first matching object/document
db.sales.findOne({item:"abc"})



//updateOne
//updateMany

db.sales.updateMany(
{
  quantity:{$lte:5} //filter
},
{
  $inc:{quantity:10}, //update
}
);

db.sales.find(
  {}
);


db.sales.updateMany
(
  {item:'abc'},
  {
    $set:
    {
      item:'abc_updated'
    }
  }
);
db.sales.find();

db.sales.updateMany(
  {quantity:{$gte:10}},
  {
    $mul:
    {
      price:0.9
    }
  }
)
db.sales.find();

/**
 * Array Operators
 * $addToSet: prevents duplicate insertions in the array
 * $pop
 * $push:insert at the end
 * $pull: remove something the matching element from the array
 * $pullAll: takes array as a param and removes all the matching elements
 * 
 */

db.sales.insert(
  {
    item:"xyz",
    discounts:[
      "hdfc","icici"
    ]
  }

);

db.sales.find(
  {
    item:"xyz"
  }
)
db.sales.update(
  {
    item:"xyz"
  },
  {
    $push:
    {discounts:'axis'}
  }
)
db.sales.update(
  {
    item:"xyz"
  },
  {
    $pull:{
      discounts:'axis'
    }
  }
);

db.sales.update(
  {item:'xyz'},
  {
    $pullAll:
    {
      discounts:['axis']
    }
  }
);
db.sales.find({item:'xyz'});