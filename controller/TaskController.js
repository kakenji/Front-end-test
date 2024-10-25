const getInput = (req, res) => {
    const input = req.body;

    // if(!input){
    //     return res.redirect('/');
    // }

    // try {
    //    const div = input;    
    //     return res.redirect('/');
    // } catch(err) {
    //     res.status(500).end({error: err.message});
    // }
    res.send("Hello");
}

const updateView = (req, res) => {

}

module.exports = {
    getInput,
    updateView
}