class AddKidokuToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :kidoku, :string
  end
end
