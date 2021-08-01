# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

uncategorized = Column.create(name: "Uncategorized")
to_do = Column.create(name: "To-Do")
in_progress = Column.create(name: "In Progress")
completed = Column.create(name: "Completed")

game = Card.create(name: "Make a Game", column: uncategorized)
game = Card.create(name: "Clean the kitchen", column: to_do)
game = Card.create(name: "Empty the litter box", column: to_do)
game = Card.create(name: "Take out the trash", column: to_do)
game = Card.create(name: "Phase 4 Project", column: in_progress)
game = Card.create(name: "Phase 1 Project", column: completed)
game = Card.create(name: "Phase 2 Project", column: completed)
game = Card.create(name: "Phase 3 Project", column: completed)