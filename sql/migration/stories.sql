Create Table "stories" (
	story_id serial PRIMARY KEY,
	image VARCHAR(200) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	user_id_story INT REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
)

	
	
