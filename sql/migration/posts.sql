Create Table posts (
	post_id serial PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	description VARCHAR(200) NOT NULL,
	image VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	user_id INT REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
)

	
	
