# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Drink.create(brand: 'Double Stout', style: 'Stout', country: 'England', quantity: 54)
Drink.create(brand: 'Spaten', style: 'Helles', country: 'Germany', quantity: 3)
Drink.create(brand: 'Newcastle', style: 'Brown ale', country: 'UK', quantity: 12)
Country.create(name: "USA")
Country.create(name: 'UK')
Country.create(name: 'Finland')
Country.create(name: 'Germany')
Country.create(name: 'Netherlands')
Style.create(name: "RED")
Style.create(name: "BLUE")
Style.create(name: "WHITE")
User.create(name: "princess", password: "123456")
User.create(name: "water", password: "abcdef")