const config = {
	dbUrl: process.env.DB_URL || "mongodb://localhost:27017/chat", //"mongodb+srv://user:user1234@cluster0.p2dnd.mongodb.net/telegrom?retryWrites=true&w=majority",
	port: process.env.PORT || 8080,
	host: process.env.HOST || "http://localhost",
	publicRoute: process.env.PUBLIC_ROUTE || "/app",
	filesRoute: process.env.FILES_ROUTE || "files",
};

module.exports = config;
