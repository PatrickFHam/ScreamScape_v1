import { connectToDatabase } from '../../../util/mongodb';

export default async function handler(req, res) {
    const {db} = await connectToDatabase();
    const { newsStoryID } = req.query;
    const id = new require('mongodb').ObjectId(newsStoryID);
    const data = await db.collection('news').findOne({_id: id});
    
    res.json(data);
};

