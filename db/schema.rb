# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_30_214957) do

  create_table "accessories", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.string "purchase_date"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "accessories_firearms", id: false, force: :cascade do |t|
    t.integer "accessory_id"
    t.integer "firearm_id"
    t.index ["accessory_id"], name: "index_accessories_firearms_on_accessory_id"
    t.index ["firearm_id"], name: "index_accessories_firearms_on_firearm_id"
  end

  create_table "firearms", force: :cascade do |t|
    t.string "make"
    t.string "model"
    t.string "serial_number"
    t.string "caliber"
    t.string "purchase_date"
    t.integer "price"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

end
