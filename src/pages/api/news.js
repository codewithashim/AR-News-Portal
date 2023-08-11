import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const uri = process.env.NEXT_PUBLIC_URI;

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        const newCollection = client.db("NewsPortal").collection("news");

        if (req.method === 'GET') {
            const news = await newCollection.find({}).toArray();
            res.status(200).json({
                status: 200,
                message: "News fetched successfully",
                data: news
            });
        } else {
            res.status(405).json({
                status: 405,
                message: "Method not allowed"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: "Internal server error"
        });
    }
}
