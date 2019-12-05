# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :posts
- has_many :messege

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|title|title|null: false|
### Association
- has_many :user_group
- has_many  :users,  through:  :user_group

## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messagageテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|image|null: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group