require "test_helper"

class Api::V1::PostsControllerTest < ActionDispatch::IntegrationTest
  test "index returns all posts" do
    get "/api/v1/posts"
    assert_response :success
    assert_equal Post.count, JSON.parse(response.body).length
  end

  test "show returns a post" do
    post = posts(:one)
    get "/api/v1/posts/#{post.id}"
    assert_response :success
    assert_equal post.title, JSON.parse(response.body)["title"]
  end

  test "show returns 404 for missing post" do
    get "/api/v1/posts/0"
    assert_response :not_found
  end
end
