export default async function handler(req, res) {
    console.log('요청 query',req.query)
    if (req.method == 'POST') {
        res.status(200).json('POST')
    } else {
        res.status(200).json('GET')
    }

}