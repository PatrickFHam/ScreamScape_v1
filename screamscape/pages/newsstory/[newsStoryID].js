import ContainerBlock from '../../components/ContainerBlock';
import NewsStory from '../../components/NewsStory';
import { connectToDatabase } from '../../util/mongodb';

export default function newsstory( { newsStory } ) {
  
  return (
    <div>
      <ContainerBlock>
        <NewsStory props={newsStory} />
      </ContainerBlock>
    </div>
  )
};

export async function getServerSideProps(req, res) {
    const {db} = await connectToDatabase();
    const { newsStoryID } = req.query;
    const id = new require('mongodb').ObjectId(newsStoryID);
    const data = await db.collection('news').findOne({_id: id});
    const newsStory = JSON.parse(JSON.stringify(data))
    
    return {
        props: { newsStory }
      }
};