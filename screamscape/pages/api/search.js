import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
    const {db} = await connectToDatabase();

    console.log("Term Searched Is:", req.query.term);

    const data = await db.collection('news2').aggregate([
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

    res.json(JSON.parse(JSON.stringify(data)));
};