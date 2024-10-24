# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_10_24_020727) do
  create_table "active_storage_attachments", charset: "utf8mb3", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8mb3", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "comments", charset: "utf8mb3", force: :cascade do |t|
    t.integer "user_id"
    t.integer "post_id"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movie_tags", charset: "utf8mb3", force: :cascade do |t|
    t.string "movie_tag_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "post_movie_tags", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "movie_tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_tag_id"], name: "index_post_movie_tags_on_movie_tag_id"
    t.index ["post_id"], name: "index_post_movie_tags_on_post_id"
  end

  create_table "post_talent_tags", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "talent_tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_post_talent_tags_on_post_id"
    t.index ["talent_tag_id"], name: "index_post_talent_tags_on_talent_tag_id"
  end

  create_table "posts", charset: "utf8mb3", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "movie_main", null: false
    t.string "movie_main_embedded", null: false
    t.string "movie_main_thumbnail", null: false
    t.string "movie_left"
    t.string "movie_left_embedded"
    t.string "movie_right"
    t.string "movie_right_embedded"
    t.string "talent_name", null: false
    t.string "talent_belongs"
    t.string "talent_channel"
    t.string "talent_x"
    t.string "talent_hp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "message"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "talent_tags", charset: "utf8mb3", force: :cascade do |t|
    t.string "talent_tag_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", charset: "utf8mb3", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "nickname", null: false
    t.string "comment"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "post_movie_tags", "movie_tags"
  add_foreign_key "post_movie_tags", "posts"
  add_foreign_key "post_talent_tags", "posts"
  add_foreign_key "post_talent_tags", "talent_tags"
  add_foreign_key "posts", "users"
end
