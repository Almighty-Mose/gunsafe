# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

puts "Seeding Firearms....."
firearm_text = File.read(Rails.root.join('lib', 'seeds', 'fifty_fake_firearms.csv'))
firearm_csv = CSV.parse(firearm_text, :headers => true, :encoding => 'ISO-8859-1')
firearm_csv.each do |row|
  f = Firearm.new
  f.make = row['make']
  f.model = row['model']
  f.serial_number = row['serial_number']
  f.caliber = row['caliber']
  f.purchase_date = row['purchase_date']
  f.price = row['price']
  f.category = row['category']
  f.user_id = row['user_id']
  f.save
  puts "#{f.make} #{f.model} saved"
end

puts "Seeding accessories....."
accessory_text = File.read(Rails.root.join('lib', 'seeds', 'fifty_fake_accessories.csv'))
accessory_csv = CSV.parse(accessory_text, :headers => true, :encoding => 'ISO-8859-1')
accessory_csv.each do |row|
  a = Accessory.new
  a.name = row['name']
  a.purchase_date = row['purchase_date']
  a.price = row['price']
  a.category = row['category']
  a.save
  puts "#{a.name} saved"
end

puts "There are now #{Firearm.count} rows in the firearms table"
puts "There are now #{Accessory.count} rows in the accessories table"

puts "Attaching accessories to firearms......"

association_text = File.read(Rails.root.join('lib', 'seeds', 'fifty_fake_accessory_firearm_associations.csv'))
association_csv = CSV.parse(association_text, :headers => true, :encoding => 'ISO-8859-1') 
association_csv.each do |row|
  puts "Association: #{row['accessory_id']} to #{row['firearm_id']}"
  firearm = Firearm.find(row['firearm_id'])
  accessory = Accessory.find(row['accessory_id'])
  firearm.accessories << accessory
  puts "Attaching #{accessory.name} to #{firearm.name}"
end

puts "Finished!"