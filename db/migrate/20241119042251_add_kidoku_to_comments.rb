class AddKidokuToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :kidoku, :boolean
  end
end
