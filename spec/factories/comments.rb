FactoryBot.define do
  factory :comment do
    content {Faker::String.random(length: 200)}
    association :user 
    association :post
  end
end
