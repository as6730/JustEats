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

ActiveRecord::Schema.define(version: 20180409000321) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cuisines", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_cuisines_on_name", unique: true
  end

  create_table "dishes", force: :cascade do |t|
    t.string "name", null: false
    t.string "price", null: false
    t.string "description"
    t.integer "mini_menu_section_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mini_menu_section_id"], name: "index_dishes_on_mini_menu_section_id"
  end

  create_table "locations", force: :cascade do |t|
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.string "address"
    t.string "neighborhood"
    t.string "cross_street"
    t.string "parking_details"
    t.string "location_image_url"
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "country", null: false
    t.string "city", null: false
    t.index ["restaurant_id"], name: "index_locations_on_restaurant_id"
  end

  create_table "menu_sections", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "menu_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["menu_id"], name: "index_menu_sections_on_menu_id"
  end

  create_table "menus", force: :cascade do |t|
    t.string "last_update", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "link"
    t.index ["restaurant_id"], name: "index_menus_on_restaurant_id"
  end

  create_table "mini_menu_sections", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "menu_section_id", null: false
    t.index ["menu_section_id"], name: "index_mini_menu_sections_on_menu_section_id"
  end

  create_table "payment_options", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_payment_options_on_name", unique: true
  end

  create_table "photos", force: :cascade do |t|
    t.string "url", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_photos_on_restaurant_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "party_size", null: false
    t.date "date", null: false
    t.integer "points", null: false
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_reservations_on_restaurant_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "restaurant_cuisines", force: :cascade do |t|
    t.integer "cuisine_id", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cuisine_id", "restaurant_id"], name: "index_restaurant_cuisines_on_cuisine_id_and_restaurant_id", unique: true
    t.index ["restaurant_id"], name: "index_restaurant_cuisines_on_restaurant_id"
  end

  create_table "restaurant_favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_restaurant_favorites_on_restaurant_id"
    t.index ["user_id", "restaurant_id"], name: "index_restaurant_favorites_on_user_id_and_restaurant_id", unique: true
  end

  create_table "restaurant_payments", force: :cascade do |t|
    t.integer "payment_id", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_id", "restaurant_id"], name: "index_restaurant_payments_on_payment_id_and_restaurant_id", unique: true
    t.index ["restaurant_id"], name: "index_restaurant_payments_on_restaurant_id"
  end

  create_table "restaurant_tags", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_restaurant_tags_on_restaurant_id"
    t.index ["tag_id", "restaurant_id"], name: "index_restaurant_tags_on_tag_id_and_restaurant_id", unique: true
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "phone_number"
    t.string "website_link"
    t.string "hours"
    t.string "dining_style"
    t.string "dress_code"
    t.string "executive_chef"
    t.string "price_range"
    t.string "private_party_facilities"
    t.string "private_party_contact"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "background_image"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "username", null: false
    t.string "body"
    t.integer "rating", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "date_created"
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "country_code"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
