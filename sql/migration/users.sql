Create Table users (
	user_id serial PRIMARY KEY,
	username VARCHAR(45) UNIQUE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	cover_photo VARCHAR(255),
	profile_photo VARCHAR(255),
	contact_no VARCHAR(15),
	city VARCHAR(45),
	bio VARCHAR(155),
	instagram_link VARCHAR(255),
	tiktok_link VARCHAR(255),
	youtube_link VARCHAR(255),
	additional_link VARCHAR(255),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	
)