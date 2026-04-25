class Post < ApplicationRecord
  has_many :photos, dependent: :destroy

  validates :title, presence: true
  validates :post_text, presence: true
end
