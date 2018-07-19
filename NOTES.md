Okay, here's what we're doing.

Use Ruby on Rails -- duh.

# Step 1: Establish Models, Migrations, and Associations (Start with User, Firearms, add Accessories later)
  Must have a has_many, a belongs_to, and a has_many :through
  User has_many Firearms, Firearm belongs_to User
  Firearm has_and_belongs_to_many Accessories
    Following along with Sinatra App attributes:
      Users will have:
        Username
        Email
        Password (think about Devise)
      Firearms will have:
        Make (required)
        Model (required)
        Serial Number
        Caliber
        Purchase Date
        Price
        User_id (belongs_to user)
      Accessories will have:
        Keeping it simple for now.
        Category: "Optic" "Sling" "Light" "Laser" "Trigger" etc.
        Price
        Purchase Date
        Serial Number
        Name (Make/Model)
  # To facilitate the has_and_belongs_to_many, we'll need a join table for firearms and accessories.
        Firearms_Accessories will have:
          firearm_id
          accessory_id
    
    I believe I'll want to use a has_and_belongs_to_many relationship for firearms and accessories. That way, I can maintain unique database records for accessories (A user only needs to enter them once), but they can be associated to multiple firearms (the equivalent of saying "I have this same scope on 2 guns").
    Iterating over user.accessories will give value.

# Step 2: Validations for Model Attributes
  A user must have a username, email, and secure_password
  A firearm must have at LEAST a make and model.

# Step 3: Establish Controllers

# Step 4: Views

# Step 5: Authentication
  # Standard User Authentication
    Sign Up, Login/out, passwords.
    Bcrypt?
    Look into Devise. Watch the study group on this.

  # Must also provide Oauth.
    Twitter?
    I don't want to use Facebook because my users may not trust Facebook to keep their data secure.

# Step 6: Adding Accessories

=====================================================================

# One Class level ActiveRecord scope method.
  This will be firearms collection value?
  Could also do value of accessories on a particular firearm.

# A nested resource.
  This will be accessories. They are nested under firearms, I also want a user to be able to view all of their accessories by specific firearm, as well as a simple list of all their accessories.

    For example, a route firearms/1/accessories/new would add an accessory to said firearm.

# Forms must display validation errors
  Look to "fields_with_errors", error messages must be present within the view.

# Keep it DRY.
  Use partials, model methods, helper methods. Keep logic out of the views. Break out complex logic in controllers to models or helpers.
  Try not to repeat code. Ask yourself, "If I'm repeating code, where else should I put this so I only write it once?"

NO SCAFFOLDS.