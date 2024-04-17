const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
client.connect();

async function SampleData() {
    try {
        const dataset = await client.db("sampleDB").collection("SampleData").find().toArray();
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
module.exports = {SampleData};