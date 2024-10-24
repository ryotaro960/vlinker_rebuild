class AddMessageToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :message, :text
  end
end
