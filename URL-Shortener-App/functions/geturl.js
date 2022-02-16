exports = async function(payload) {

   const mongodb = context.services.get("mongodb-atlas");
   const db = mongodb.db("url-shortener-db");
   const mycollection = db.collection("url-collection");
   
   const doc=payload.query.doc;

   const findresult = await mycollection.find({'url': doc.urlKey}).toArray();
   return { findresult };

};