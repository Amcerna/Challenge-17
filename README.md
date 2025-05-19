# HW 19 - testing setup
This  Assignment was meant to demanstrate our ability create a mongoodb database and build a rest api to interact wtih it

## Installation instructions
fork this repository and utilitze routes to create modify and delete users, thought, and responses
**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user (note that the examples below are just sample data):

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`


**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought. Don't forget to push the created thought's `_id` to the associated user's `thoughts` array field.

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`


**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Usage Examplet
this can be used as a bases for an app that utilizes users, thoughts, responses 

## Dependencies 
mongoo db installed on your device 

