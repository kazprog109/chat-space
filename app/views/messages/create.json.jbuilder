json.content @message.content
json.image @message.image.url
json.updated_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name @message.user.name
json.user_id @message.user.id