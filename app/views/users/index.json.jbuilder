json.array! @users do |user|
  json.name user.name
  json.id user.id
  #json.created_at  @user.created_at.strftime("%Y/%m/%d %H:%M")
end