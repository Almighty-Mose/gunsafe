# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project (Rails 5.2.0 Yeaaaahhhhhhhhhh!)
- [x] Include at least one has_many relationship (User has_many Firearms, Firearm has_many Accessories)
- [x] Include at least one belongs_to relationship (Firearms belong_to a User, Accessories belong_to a Firearm)
- [x] Include at least one has_many through relationship (User has_many Accessories through Firearms)
- [x] The "through" part of the has_many through includes at least one user submittable attribute (Firearms)
- [x] Include reasonable validations for simple model objects (Users, Firearms, and Accessories must have names, username and email must be unique, Firearms and Accessories must have price.)
- [ ] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)
- [x] Include signup (Built sessions controller)
- [x] Include login (Built sessions controller)
- [x] Include logout (Built sessions controller)
- [ ] Include third party signup/login (how e.g. Devise/OmniAuth)
- [x] Include nested resource show or index (URL e.g. users/2/recipes)
- [x] Include nested resource "new" form (URL e.g. recipes/1/ingredients)
- [ ] Include form display of validation errors (form URL e.g. /recipes/new)

Confirm:
- [ ] The application is pretty DRY
- [ ] Limited logic in controllers
- [ ] Views use helper methods if appropriate
- [ ] Views use partials if appropriate