# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project (Rails 5.2.0 Yeaaaahhhhhhhhhh!)
- [x] Include at least one has_many relationship (User has_many Firearms, Firearm has_many Accessories)
- [x] Include at least one belongs_to relationship (Firearms belong_to a User, Accessories belong_to a Firearm)
- [x] Include at least one has_many through relationship (User has_many Accessories through Firearms)
- [x] The "through" part of the has_many through includes at least one user submittable attribute (Firearms)
- [x] Include reasonable validations for simple model objects (Users, Firearms, and Accessories must have names, username and email must be unique, Firearms and Accessories must have price.)
- [x] Include a class level ActiveRecord scope method (Firearm and Accessory have scope method for filtering)
- [x] Include signup (Built sessions controller)
- [x] Include login (Built sessions controller)
- [x] Include logout (Built sessions controller)
- [ ] Include third party signup/login (how e.g. Devise/OmniAuth)
- [x] Include nested resource show or index (firearms/2/accessories/1)
- [x] Include nested resource "new" form (firearms/1/accessories/new)
- [X] Include form display of validation errors (forms include fields_with_errors display)

Confirm:
- [ ] The application is pretty DRY
- [ ] Limited logic in controllers
- [ ] Views use helper methods if appropriate
- [ ] Views use partials if appropriate