Create Table "relationships" (
	relation_id serial PRIMARY KEY,
	follower_user_id INT REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	followed_user_id INT REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	followed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

	
	
