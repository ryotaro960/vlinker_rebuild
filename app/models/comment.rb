class Comment < ApplicationRecord

  validates :content, length: { maximum: 500}

  belongs_to :post
  belongs_to :user
end
