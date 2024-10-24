FactoryBot.define do
  factory :talent_tag do
    talent_tag_name {Faker::Name.first_name}
  end
end
