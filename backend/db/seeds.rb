# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

posts_data = [
  {
    title: "First Post",
    post_text: "This is the first post.",
    scheduled_date: 1.day.from_now,
    photos: [
      {
        image_url: "https://picsum.photos/500/300",
        caption: "Photo 1 caption"
      },
      {
        image_url: "https://picsum.photos/300/500",
        caption: nil
      }
    ]
  },
  {
    title: "Second Post",
    post_text: "This is the second post.",
    scheduled_date: 2.days.from_now,
    photos: [
      {
        image_url: "https://picsum.photos/600/250",
        caption: "Photo 3 caption"
      }
    ]
  },
  {
    title: "Third Post",
    post_text: "This is the third post.",
    scheduled_date: 3.days.from_now,
    photos: []
  }
]

posts_data.each do |post_data|
  post = Post.find_or_create_by!(title: post_data[:title]) do |p|
    p.post_text = post_data[:post_text]
    p.scheduled_date = post_data[:scheduled_date]
  end

  post_data[:photos].each do |photo_data|
    Photo.find_or_create_by!(post: post, image_url: photo_data[:image_url]) do |ph|
      ph.caption = photo_data[:caption]
    end
  end
end
