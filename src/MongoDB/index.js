const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://url-shortener.1jxb7.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority';

const credentials = './X509-cert-5732992203657801213.pem';

const client = new MongoClient(uri, {
  sslKey: credentials,
  sslCert: credentials,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function run() {
  try {
    await client.connect();
    const database = client.db("url-shortener-db");
    // const urlCollection = database.collection("url-collection");
    const shortendUrlCollection = database.collection("shortened-url-collection");
    // const urlDocCount = await urlCollection.countDocuments({});
    const sUrlDocCount = await shortendUrlCollection.countDocuments({});
    // console.log(urlDocCount);
    console.log(sUrlDocCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);