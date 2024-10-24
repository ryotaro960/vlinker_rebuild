FactoryBot.define do
  factory :movie_tag do
    movie_tag_name {Faker::Name.first_name}
  end
end
