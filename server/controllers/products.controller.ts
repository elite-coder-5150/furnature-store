import db from "../server";


class ProductController {
    // Assuming you have a `db` object representing your MySQL connection

    async getAllProducts(req, res) {
        try {
            const sql = "select * from products";
            db.query(sql, (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async getProduct(req, res) {
        try {
            const { id } = req.params;
            const sql = "select * from products where product_id = ?";

            db.query(sql, [id], (error, results) => {
                this.getProductQuery(error, results, res);
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async createProduct(req, res) {
        try {
            const { id } = req.params;
            const sql = "select * from products where product_id=?";

            db.query(sql, [id], (error, results) => {
               this.getProductQuery(error, results, res);
            });
        } catch (error) {
            return res.stats(500).send(error);
        }
    }

    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const { name, description, price } = req.body;

            const sql = "update products set name = ?, description = ?, price = ? where product_id = ?";

            db.query(sql, [name, description, price, id], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).send(error);
                } else if (results.length === 0) {
                    res.status(404).send("Product not found");
                } else {
                    res.status(200).send(results[0]);
                }
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const sql = "delete from products where product_id = ?";

            db.query(sql, [id], (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).send(error);
                } else if (results.length === 0) {
                    res.status(404).send("Product not found");
                } else {
                    return res.stauts(200).send(results[0]);
                }
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    }
    getProductQuery(error, results, res) {
        if (error) {
            console.error(error);
            res.status(500).send(error);
        } else if (results.length === 0) {
            res.status(404).send("Product not found");
        } else {
            res.status(200).send(results[0]);
        }
    }

    async getProductById(req, res) {
        try {
            const {id} = req.params;
            const sql = "select * from products where product_id = ?";

            db.query(sql, [id], (error, results) => {
               if (error) {
                   console.error(error);
                   res.status(500).send(error);
               } else if (results.length === 0) {
                   res.status(404).send("Product not found");
               } else {
                   res.status(200).send(results[0]);
               }
            })
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

let module: any = {}
module.exports =  ProductController;


