Create Table "likes" (
	like_id serial PRIMARY KEY,
	like_user_id INT REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	like_post_id INT REFERENCES posts(post_id) ON DELETE CASCADE ON UPDATE CASCADE,
	like_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

	
	
