const mongoose= require('mongoose');
const dotenv = require('dotenv');
require('colors');
const shopModel= require('./Models/shop');
const pizzasData = require('./Data/shop-data');
const connectDB= require('./config/config')

dotenv.config();
connectDB();


const importData = async () => {
    try {
        await mongoose.connect('your-mongodb-connection-string', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        for (const pizza of pizzasData) {
            const pizzaInstance = new shopModel(pizza); 
            const savedPizza = await pizzaInstance.save();
            console.log(`Saved pizza: ${savedPizza.name}`);
        }

        console.log('Data imported successfully.');
    } catch (error) {
        console.error('Error importing data:', error.message);
    } finally {
        mongoose.connection.close();
    }
};

importData();