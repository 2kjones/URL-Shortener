exports = async function(payload) {

   const mongodb = context.services.get("mongodb-atlas");
   const db = mongodb.db("url-shortener-db");
   const customers = db.collection("url-collection");
   
   const doc=payload.query.doc;

   const result= await customers.insertOne(doc);
   
   if(result) {
     
       return { text: `URL added.` };   
       
   }
      return { text: `Error adding.` };

   
};