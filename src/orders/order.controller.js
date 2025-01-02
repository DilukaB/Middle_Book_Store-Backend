const Order = require("./order.model");

const createAOrder = async (req, res) => {
    try {
        // Create a new instance of the Order model
        const newOrder = new Order(req.body);

        // Save the order to the database
        const saveOrder = await newOrder.save();

        // Respond with the saved order
        res.status(200).json(saveOrder);
    } catch (error) {
        console.error("Error creating order", error);

        // Respond with an error message
        res.status(500).json({ message: "Failed to create order" });
    }
};

module.exports = {
    createAOrder,
};
