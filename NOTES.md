Okay, here's what we're doing.

The project requirements are thus:

Use Ruby on Rails -- duh.
Must have a has_many, a belongs_to, and a has_many :through

Validations for model attributes

One Class level ActiveRecord scope method.
  This will be firearms collection value?
  Could also do value of accessories on a particular firearm.

Standard User Authentication
  Sign Up, Login/out, passwords.
  Bcrypt?
  Look into Devise. Watch the study group on this.

Must also provide Oauth.
  Twitter?
  I don't want to use Facebook because my users may not trust Facebook to keep their data secure.

A nested resource.
  This will be accessories. They are nested under firearms, I also want a user to be able to view all of their accessories by specific firearm, as well as a simple list of all their accessories.

    For example, a route firearms/1/accessories/new would add an accessory to said firearm.

Forms must display validation errors
  Look to "fields_with_errors", error messages must be present within the view.

Keep it DRY.
  Use partials, model methods, helper methods. Keep logic out of the views. Break out complex logic in controllers to models or helpers.
  Try not to repeat code. Ask yourself, "If I'm repeating code, where else should I put this so I only write it once?"

NO SCAFFOLDS.