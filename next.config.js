/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["firebasestorage.googleapis.com","res.cloudinary.com"]
        },
        env: {
            MONGODB_URI:"mongodb+srv://hassan:messk2015@cluster0.yfhhu.mongodb.net/DataBaseCommerce2024?retryWrites=true&w=majority"
            }
}

module.exports = nextConfig
