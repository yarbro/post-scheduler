class Api::V1::PostsController < ApplicationController
  def index
    posts = Post.includes(:photos).all
    render json: posts.as_json(include: :photos)
  end

  def show
    post = Post.includes(:photos).find(params[:id])
    render json: post.as_json(include: :photos)
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Post not found' }, status: :not_found
  end
end
