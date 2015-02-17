class AddClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.integer :user_id
      t.string :event_id

      t.timestamps null: false
    end
  end
end
