require "test_helper"

class PhotoTest < ActiveSupport::TestCase
  test "valid with image_url and post" do
    post = Post.new(title: "First Post", post_text: "Some content")
    photo = Photo.new(image_url: "https://example.com/photo.jpg", post: post)
    assert photo.valid?
  end
end
