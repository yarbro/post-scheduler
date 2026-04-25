require "test_helper"

class PostTest < ActiveSupport::TestCase
  test "valid with title and post_text" do
    post = Post.new(title: "First Post", post_text: "Some content")
    assert post.valid?
  end
end
