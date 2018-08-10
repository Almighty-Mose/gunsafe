# README

##Description

GunSafe is a platform for firearms owners to store information about their firearms for use in the event that anything is lost or stolen. The application also allows for accessories (optics, lights, lasers, etc.) to be stored.

Built with Ruby on Rails

##Installation
* You can install the rails gem by typing `gem install rails` in the command line, if you don't have it already.
* From the command line Run `git clone https://github.com/Almighty-Mose/gunsafe.git`
* Run `bundle install`
* Run `rake db:migrate`
* Run `rails s` to launch application in the browser.
* View on localhost:3000

##Usage
After creating an account, you'll be taken to the "Add A Firearm" form. Here, you can fill out the requisite information about your firearm, as well as a single accessory. As you add more accessories, they will populate as checkboxes for subsequent firearm additions.
After creating a firearm, you'll be taken to your home page, which contains your firearm list. Here, you can see the total value of your firearms, as well as filter them by category (Pistol, Rifle, Shotgun, Other).
Clicking a firearm will take you to a page where you can see more detailed information, as well as edit, add accessories to, or delete that firearm.
Clicking your username from the firearms list will take you to your profile, where you can edit your profile information as well as log out.
Accessories can be accessed from this page by clicking "View Your Accessories".

## Contributer's Guide:
File an issue with a pull request through github.

## Code of Conduct
Everyone interacting in the IHaveThat project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct).
