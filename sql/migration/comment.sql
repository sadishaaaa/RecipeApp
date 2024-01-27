Create Table "comments" (
	comment_id serial PRIMARY KEY,
	description VARCHAR(200) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	user_id_comment INT REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	post_id INT REFERENCES posts(post_id)ON DELETE CASCADE ON UPDATE CASCADE
)

	
	
