# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
require 'csv'

puts "Seeding Firearms....."
CSV.read(Rails.root.join('lib', 'seeds', 'fifty_fake_firearms.csv'), headers: true).each do |row|
  f = Firearm.create(row.to_hash)
  puts "#{f.name} saved!"
end

puts "Seeding accessories....."
CSV.read(Rails.root.join('lib', 'seeds', 'fifty_fake_accessories.csv'), headers: true).each do |row|
  a = Accessory.create(row.to_hash)
  puts "#{a.name} saved!"
end

puts "Attaching accessories to firearms......"
CSV.read(Rails.root.join('lib', 'seeds', 'fifty_fake_accessory_firearm_associations.csv'), headers: true).each do |row|
  puts "Association: #{row['accessory_id']} to #{row['firearm_id']}"
  firearm = Firearm.find(row['firearm_id'])
  accessory = Accessory.find(row['accessory_id'])
  firearm.accessories << accessory
  puts "Attaching #{accessory.name} to #{firearm.name}"
end

puts "There are now #{Firearm.count} rows in the firearms table"
puts "There are now #{Accessory.count} rows in the accessories table"
puts "Finished!"