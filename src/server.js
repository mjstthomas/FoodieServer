require('dotenv').config()
const app = require('./app')
const knex = require('knex')
const { PORT, DATABASE_URL } = require('./config')
const {MongoClient} = require('mongodb')
const uri = `mongodb+srv://mjstthomas:${process.env.MONGO_PW}@cluster0-prwhd.mongodb.net/<dbname>?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
	useUnifiedTopology: true
})

const db = knex({
	client: 'pg',
	connection: process.env.DATABASE_URL
});

app.set('db', db);

async function connection(client){
	await client.connect()
	const listDBs = client.db().admin().listDatabases()
	listDBs
	.then(result=>{
		console.log(result)
	})
}
const newUser = {
	name: "MJ",
	email: "mjstthomas0516@gmail.com",
	password: "project1",
	userImage: "",
	preferences: {
		allergies:[],
		dislikes: [],
		diet: ""
	},
	favorites: [],
	friends: [],
	mealPlan: [{
		'day': 'sunday',
		'breakfast': {},
		'lunch': {},
		'dinner': {},
		'snack(s)': []
		}, {
		'day': 'monday',
		'breakfast': {},
		'lunch': {},
		'dinner': {},
		'snack(s)': []
		}, {
		'day': 'tuesday',
		'breakfast': {},
		'lunch': {},
		'dinner': {},
		'snack(s)': []
		}, {
		'day': 'wednesday',
		'breakfast': {},
		'lunch': {},
		'dinner': {},
		'snack(s)': []
		}, {
		'day': 'thursday',
		'breakfast': {},
		'lunch': {},
		'dinner': {},
		'snack(s)': []
		}, {
		'day': 'friday',
		'breakfast': {},
		'lunch': {},
		'dinner': {},
		'snack(s)': []
		}, {
		'day': 'saturday',
		'breakfast': {},
		'lunch': {},
		'dinner': {},
		'snack(s)': []
		}]
}
async function createUser(client, newUser){
	const result = await client.db('Foodie_app').collection('users').insertOne(newUser)
	console.log(`new user created with id: ${result.insertedId}`)
}
connection(client)

app.listen(PORT, (res, req) =>{
	console.log(`Listening at http://localhost:${PORT}`)
})