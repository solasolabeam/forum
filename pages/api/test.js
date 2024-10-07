export default async function handler(req, res) {
    console.log('req.body', req.body)
    if (req.method == 'POST') {
        res.status(200).json('POST')
    } else {
        res.status(200).json('GET')
    }

}