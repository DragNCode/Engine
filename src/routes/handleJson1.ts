export const handleJson1 = (req: any, res: any) => {
    console.log('object');
    console.log(req);

    res.json({
        message: 'recieved successfully'
    })
}