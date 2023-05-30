// //MongoDB CRUD Operations
// //CRUD operations create, read, update, and delete documents.

// // Create operation is used to insert new documents in the MongoDB database.
// // Read operation is used to query a document in the database.
// // Update operation is used to modify existing documents in the database.
// // Delete operation is used to remove documents in the database.

// //Create Operations :
// db.collection.insertOne()
// db.collection.insertMany()
// insertOne()
// // As the namesake, insertOne() allows you to insert one document into the collection. 
// //  We can insert a single entry into our collection by calling the insertOne() method on RecordsDB.
// // We then provide the information we want to insert in the form of key-value pairs.

// db.RecordsDB.insertOne({
//     name: "Marsh",
//     age: "6 years",
//     species: "Dog",
//     ownerAddress: "380 W. Fir Ave",
//     chipped: true
// })

// // If the create operation is successful, a new document is created. The function
// //  will return an object where “acknowledged” is “true” and “insertID” is the newly created “ObjectId.”

// > db.RecordsDB.insertOne({
// name1: "Marsh",
// age: "6 years",
// species: "Dog",
// ownerAddress: "380 W. Fir Ave",
// chipped: true
// })
// {
//         "acknowledged": true,
//         "insertedId": ObjectId("5fd989674e6b9ceb8665c57d")
// }
// insertMany()
// //It’s possible to insert multiple items at one time by calling the insertMany() method on the desired collection. 
// // In this case, we pass multiple items into our chosen collection (RecordsDB) and separate them by commas. 
// //Within the parentheses, we use brackets to indicate that we are passing in a list of multiple entries.
// // This is commonly referred to as a nested method.

// db.RecordsDB.insertMany([{
//     name: "Marsh",
//     age: "6 years",
//     species: "Dog",
//     ownerAddress: "380 W. Fir Ave",
//     chipped: true},
//       {name: "Kitana", 
//       age: "4 years", 
//       species: "Cat", 
//       ownerAddress: "521 E. Cortland", 
//       chipped: true}])

// db.RecordsDB.insertMany([{ name: "Marsh", age: "6 years", species: "Dog", 
// ownerAddress: "380 W. Fir Ave", chipped: true}, {name: "Kitana", age: "4 years", 
// species: "Cat", ownerAddress: "521 E. Cortland", chipped: true}])
// {
//         "acknowledged" : true,
//         "insertedIds" : [
//                 ObjectId("5fd98ea9ce6e8850d88270b4"),
//                 ObjectId("5fd98ea9ce6e8850d88270b5")
//         ]
// }

// //2. Read Operations
// // The read operations allow you to supply special query filters and criteria that let you specify which documents you want. The MongoDB documentation contains more information on the available query filters. 
// // Query modifiers may also be used to change how many results are returned.
// // MongoDB has two methods of reading documents from a collection:

// db.collection.find()
// db.collection.findOne()

// find()
// //In order to get all the documents from a collection, 
// //we can simply use the find() method on our chosen collection. Executing just the 
// //find() method with no arguments will return all records currently in the collection.
// db.RecordsDB.find()
// { "_id": ObjectId("5fd98ea9ce6e8850d88270b5"), "name" : "Kitana", "age" : "4 years", "species" : "Cat", "ownerAddress" : "521 E. Cortland", "chipped" : true }
// { "_id": ObjectId("5fd993a2ce6e8850d88270b7"), "name" : "Marsh", "age" : "6 years", "species" : "Dog", "ownerAddress" : "380 W. Fir Ave", "chipped" : true }
// { "_id": ObjectId("5fd993f3ce6e8850d88270b8"), "name" : "Loo", "age" : "3 years", "species" : "Dog", "ownerAddress" : "380 W. Fir Ave", "chipped" : true }
// { "_id" : ObjectId("5fd994efce6e8850d88270ba"), "name" : "Kevin", "age" : "8 years", "species" : "Dog", "ownerAddress" : "900 W. Wood Way", "chipped" : true }
// // Here we can see that every record has an assigned “ObjectId” mapped to the “_id” key.
// // If you want to get more specific with a read operation and find a desired subsection of the records, 
// // you can use the previously mentioned filtering criteria to choose what results should be returned. 
// // One of the most common ways of filtering the results is to search by value.

// db.RecordsDB.find({"species":"Cat"})
// { "_id" : ObjectId("5fd98ea9ce6e8850d88270b5"), "name" : "Kitana", "age" : "4 years", "species" : "Cat", "ownerAddress" : "521 E. Cortland", "chipped" : true }

// // findOne()
// // In order to get one document that satisfies the search criteria,
// //  we can simply use the findOne() method on our chosen collection. 
// //  If multiple documents satisfy the query, this method returns the first document according to the 
// //  natural order which reflects the order of documents on the disk. If no documents satisfy the search 
// //  criteria, the function returns null. The function takes the following form of syntax.

// db.{collection}.findOne({query}, {projection})
// //Let's take the following collection—say, RecordsDB, as an example.

// { "_id" : ObjectId("5fd98ea9ce6e8850d88270b5"), "name" : "Kitana", "age" : "8 years", "species" : "Cat", "ownerAddress" : "521 E. Cortland", "chipped" : true }
// { "_id" : ObjectId("5fd993a2ce6e8850d88270b7"), "name" : "Marsh", "age" : "6 years", "species" : "Dog", "ownerAddress" : "380 W. Fir Ave", "chipped" : true }
// { "_id" : ObjectId("5fd993f3ce6e8850d88270b8"), "name" : "Loo", "age" : "3 years", "species" : "Dog", "ownerAddress" : "380 W. Fir Ave", "chipped" : true }
// { "_id" : ObjectId("5fd994efce6e8850d88270ba"), "name" : "Kevin", "age" : "8 years", "species" : "Dog", "ownerAddress" : "900 W. Wood Way", "chipped" : true }
// //And, we run the following line of code:
// db.RecordsDB.find({"age":"8 years"})
// //We would get the following result:
// { "_id" : ObjectId("5fd98ea9ce6e8850d88270b5"), "name" : "Kitana", "age" : "8 years",
//  "species" : "Cat" , "ownerAddress" : "521 E. Cortland", "chipped" : true  }

// //3. Update Operations
// // Like create operations, update operations operate on a single collection, 
// // and they are atomic at a single document level. 
// // An update operation takes filters and criteria to select the documents you want to update.
// // You should be careful when updating documents, as updates are permanent and can’t be rolled back. 
// // This applies to delete operations as well.

// //For MongoDB CRUD, there are three different methods of updating documents:

// db.collection.updateOne()
// db.collection.updateMany()
// db.collection.replaceOne()
// updateOne()
// // We can update a currently existing record and change a single document with an update operation.
// //  To do this, we use the updateOne() method on a chosen collection, which here is “RecordsDB.” 
// //  To update a document, we provide the method with two arguments: an update filter and an update action.
// // The update filter defines which items we want to update, 
// // and the update action defines how to update those items. We first pass in the update filter. 
// // Then, we use the “$set” key and provide the fields we want to update as a value. 
// // This method will update the first record that matches the provided filter.

// db.RecordsDB.updateOne({name: "Marsh"}, {$set:{ownerAddress: "451 W. Coffee St. A204"}})
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
// { "_id" : ObjectId("5fd993a2ce6e8850d88270b7"), "name" : "Marsh", "age" : "6 years", "species" : "Dog", "ownerAddress" : "451 W. Coffee St. A204", "chipped" : true }
// updateMany()
// updateMany() //allows us to update multiple items by passing in a list of items, 
// // just as we did when inserting multiple items. This update operation uses the same syntax for
// //  updating a single document.

// db.RecordsDB.updateMany({species:"Dog"}, {$set: {age: "5"}})
// { "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
// > db.RecordsDB.find()
// { "_id" : ObjectId("5fd98ea9ce6e8850d88270b5"), "name" : "Kitana", "age" : "4 years", "species" : "Cat", "ownerAddress" : "521 E. Cortland", "chipped" : true }
// { "_id" : ObjectId("5fd993a2ce6e8850d88270b7"), "name" : "Marsh", "age" : "5", "species" : "Dog", "ownerAddress" : "451 W. Coffee St. A204", "chipped" : true }
// { "_id" : ObjectId("5fd993f3ce6e8850d88270b8"), "name" : "Loo", "age" : "5", "species" : "Dog", "ownerAddress" : "380 W. Fir Ave", "chipped" : true }
// { "_id" : ObjectId("5fd994efce6e8850d88270ba"), "name" : "Kevin", "age" : "5", "species" : "Dog", "ownerAddress" : "900 W. Wood Way", "chipped" : true }
// replaceOne()
// //The replaceOne() method is used to replace a single document in the specified collection.
// // replaceOne() replaces the entire document, meaning fields in the old document not contained in the new will be lost.

// db.RecordsDB.replaceOne({name: "Kevin"}, {name: "Maki"})
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
// > db.RecordsDB.find()
// { "_id" : ObjectId("5fd98ea9ce6e8850d88270b5"), "name" : "Kitana", "age" : "4 years", "species" : "Cat", "ownerAddress" : "521 E. Cortland", "chipped" : true }
// { "_id" : ObjectId("5fd993a2ce6e8850d88270b7"), "name" : "Marsh", "age" : "5", "species" : "Dog", "ownerAddress" : "451 W. Coffee St. A204", "chipped" : true }
// { "_id" : ObjectId("5fd993f3ce6e8850d88270b8"), "name" : "Loo", "age" : "5", "species" : "Dog", "ownerAddress" : "380 W. Fir Ave", "chipped" : true }
// { "_id" : ObjectId("5fd994efce6e8850d88270ba"), "name" : "Maki" }

// //4. Delete Operations
// // Delete operations operate on a single collection, like update and create operations. 
// // Delete operations are also atomic for a single document. 
// // You can provide delete operations with filters and criteria in order to specify which documents 
// // you would like to delete from a collection. The filter options rely on the same syntax that read 
// // operations utilize.

// //MongoDB has two different methods of deleting records from a collection:

// db.collection.deleteOne()
// db.collection.deleteMany()
// deleteOne()
// deleteOne() //is used to remove a document from a specified collection on the MongoDB server.
// // A filter criteria is used to specify the item to delete. It deletes the first record that matches 
// //the provided filter.

// db.RecordsDB.deleteOne({name:"Maki"})
// { "acknowledged" : true, "deletedCount" : 1 }
// > db.RecordsDB.find()
// { "_id" : ObjectId("5fd98ea9ce6e8850d88270b5"), "name" : "Kitana", "age" : "4 years", "species" : "Cat", "ownerAddress" : "521 E. Cortland", "chipped" : true }
// { "_id" : ObjectId("5fd993a2ce6e8850d88270b7"), "name" : "Marsh", "age" : "5", "species" : "Dog", "ownerAddress" : "451 W. Coffee St. A204", "chipped" : true }
// { "_id" : ObjectId("5fd993f3ce6e8850d88270b8"), "name" : "Loo", "age" : "5", "species" : "Dog", "ownerAddress" : "380 W. Fir Ave", "chipped" : true }
// deleteMany()
// deleteMany() //is a method used to delete multiple documents from a desired collection with a single
// // delete operation. A list is passed into the method and the individual items are defined with filter 
// //criteria as in deleteOne().

// db.RecordsDB.deleteMany({species:"Dog"})
// { "acknowledged" : true, "deletedCount" : 2 }
// > db.RecordsDB.find()
// { "_id" : ObjectId("5fd98ea9ce6e8850d88270b5"), "name" : "Kitana", "age" : "4 years", "species" : "Cat",
//  "ownerAddress" : "521 E. Cortland", "chipped" : true }
