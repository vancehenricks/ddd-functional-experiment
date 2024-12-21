SELECT
    user_id,
    username,
    display_name,
    description,
    email
FROM users WHERE user_id = $1;
