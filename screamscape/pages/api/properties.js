import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res){
    const {db} = await connectToDatabase();

    // CHANGE 'POSTS' to the MongoDB collection name.
    const data = await db.collection('news').find({}).limit(20).toArray();

    res.json(data);
};