class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :task
      t.boolean :done
      t.datetime :due_date
      t.integer :user_id
      t.integer :event_id

      t.timestamps null: false
    end
  end
end
