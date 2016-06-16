var foods = [
	{id:0,name:"water",calories:"0",serving:"8oz"},
	{id:1,name:"Cherrios",calories:"100",serving:"28g"},
	{id:2,name:"Almond Milk",calories:"60",serving:"8oz"}
];

exports.findAll = function (req, res, next) {
    res.send(foods);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(foods[id]);
};