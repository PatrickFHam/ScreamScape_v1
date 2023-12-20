import { connectToDatabase } from '../../../util/mongodb';

export default async function handler(req, res) {
    const {db} = await connectToDatabase();

    const data = await db.collection('news2').find({}).toArray();
    
    res.json(JSON.parse(JSON.stringify(data)));
};