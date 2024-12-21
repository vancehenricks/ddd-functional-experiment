INSERT INTO users (
    username,
    password,
    display_name,
    description,
    email
)
VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
)
RETURNING user_id, username, display_name, description, email;
