class DropClientsTable < ActiveRecord::Migration
  def up
    drop_table :clients
  end
end
