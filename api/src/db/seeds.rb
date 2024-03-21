# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create a user
User.create!(
  [
    {
      name: "Admin",
      email: "admin@gmail.com",
      password: "password",
      admin: true
    },
    {
      name: "Test",
      email: "test@gmail.com",
      password: "password",
      admin: true
    },
    {
      name: "User1",
      email: "user1@gmail.com",
      password: "password",
      admin: false
    },
    {
      name: "User2",
      email: "user2@gmail.com",
      password: "password",
      admin: true
    }
  ]

)