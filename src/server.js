require('dotenv').config()
const app = require('./app')
const { PORT } = require('./config')
const {MongoClient} = require('mongodb')
const uri = `mongodb+srv://mjstthomas:${process.env.MONGO_PW}@cluster0-prwhd.mongodb.net/<dbname>?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
	useNewURLParser: true,
	useUnifiedTopology: true
})

async function connection(client){
	await client.connect()
	const listDBs = client.db().admin().listDatabases()
	listDBs
	.then(result=>{
		console.log(result)
	})
}

connection(client)

app.listen(PORT, (res, req) =>{
	console.log(`Listening at http://localhost:${PORT}`)
})