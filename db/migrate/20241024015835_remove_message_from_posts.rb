class RemoveMessageFromPosts < ActiveRecord::Migration[7.0]
  def change
    remove_column :posts, :message, :string
  end
end
