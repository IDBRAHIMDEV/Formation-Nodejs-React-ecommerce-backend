const Category = require('../models/category');

exports.createCategory = (req, res) => {

    const category = new Category(req.body);

    category.save((err, category) => {
         
        if(err) {
            return res.status(400).json({
                error: 'bad Request !'
            })
        }

        res.json({
            cartegory: category
        })
    })

}

exports.categoryId = (req, res, next, id) => {

    Category.findById(id).exec((err, category) => {

        if(err || !category) {
            return res.status(404).json({
                error: "Category not found !"
            })
        }

        req.category = category;
        next()
    })

} 


exports.showCategory = (req, res) => {

    let category = req.category;

    res.json({
        category
    })
}


exports.updateCategory = (req, res) => {

    let category = req.category;

    category.name = req.body.name;

    category.save((err, category) => {

        if(err) {
            return res.status(400).json({
                error: "bad request !"
            })
        }

        res.json({
            category,
            message: 'Category updated '
        })

    })

}


exports.deleteCategory = (req, res) => {

    let category = req.category;

    category.remove((err, category) => {

        if(err) {
            return res.status(404).json({
                error: "category not found !"
            })
        }

        res.status(204).json({
            message: 'Category deleted '
        })

    })

}

exports.allCategories = (req, res) => {

    Category.find().exec((err, categories) => {
        if(err){
            return res.status(500).json({
                error: err
            })
        }

        res.json({
            categories
        })
    })
}



