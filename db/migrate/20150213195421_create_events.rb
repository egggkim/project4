class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :client_id
      t.integer :user_id
      t.string :address
      t.datetime :date
      t.time :start_time
      t.time :end_time

      t.timestamps null: false
    end
  end
end
