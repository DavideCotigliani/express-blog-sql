const index = (req, res) => {
    res.send('elenco blog');
}

const show = (req, res) => {
    res.send("blog con id: " + req.params.id)
}

module.exports = {
    index,
    show
}