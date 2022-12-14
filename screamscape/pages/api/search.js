import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
    const {db} = await connectToDatabase();

    console.log(req.query.term);

    const data = await db.collection('news').aggregate([
        {
          '$search': {
            'index': 'default',
            'text': {
              'query': req.query.term,
              'path': {
                'wildcard': '*'
              }
            }
          }
        }
      ]).toArray();

    res.json(data)
};