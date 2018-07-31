Okay, here's what we're doing.

Use Ruby on Rails -- duh.

#FEATURE NOTES
  Valuation: Model Class Methods for user, query and add value attributes for firearms and accessories.
    User.firearms_value = total :price of all firearms
    User.accessories_value = total :price of all accessories
    User.collection_value (firearms_value + accessories_value)
  Display this information, possibly on user's profile page?
  Display firearms_value on firearms index
  Display accessories_value on accessories index

# (DONE) Step 1: Establish Models, Migrations, and Associations (Start with User, Firearms, add Accessories later)
  Must have a has_many, a belongs_to, and a has_many :through
  User has_many Firearms, Firearm belongs_to User
  Firearm has_and_belongs_to_many Accessories
    Following along with Sinatra App attributes:
      Users will have:
        Username
        Email
      Firearms will have:
        Password (think about Devise)
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
          Connected attribute (true, false)
    
    I believe I'll want to use a has_and_belongs_to_many relationship for firearms and accessories. That way, I can maintain unique database records for accessories (A user only needs to enter them once), but they can be associated to multiple firearms (the equivalent of saying "I have this same scope on 2 guns").
    Iterating over user.accessories will give value.

    Accessories don't need a serial number attribute. We don't need to concern ourselves with uniqueness in that way.
    

# (DONE) Step 2: Validations for Model Attributes
  A user must have a username, email, and secure_password
  A firearm must have at LEAST a make and model.

# Step 3: Establish Controllers
  What do I need a controller for?
    Users
    Firearms
    Accessories
    Sessions
    Welcome

# Step 4: Forms
  Users New 
  Users Edit
  Firearms with Accessories New
    3 Accessory Fields, with a note saying if you have more than three, you can add the rest later.
  Firearms Edit
  Accessories Edit
  Sessions New

# Step 4a: Views
  Users
    _form
    new
    edit
    show
    
  Firearms
    _form
    new
    edit
    show
    index

  Accessories
    new
    edit
    show
    index
  

# Step 5: Authentication
  # Standard User Authentication
    Sign Up, Login/out, passwords.
    Bcrypt?
    Look into Devise. Watch the study group on this.

  # Must also provide Oauth.
    Google


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

firearm form

  make
  model
  price

  Does this firearm have any accessories?
    1, 2, 3, 4, etc.

  user hits 3 accessories
    firearm#create

    redirect accessory#new

  user_input.times do render form


Accessories_firearms

  Connected boolean (is an accessory attached to this firearm?)
Make an accessory_firearms model so that it can have attributes
Update my database
Change accessories and firearms to has_many_through.
Always reference the accessory_id and the firearm_id when accessing the join table.

I would like to add Model Class methods to sort a User's Firearms by type: e.g Rifle, Shotgun, Pistol, Other.
  To do this I need to add a "type" Column to the firearm's table.











