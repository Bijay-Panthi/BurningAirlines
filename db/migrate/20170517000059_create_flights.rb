class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.integer :fligh_number
      t.text :origin
      t.text :destination
      t.integer :date
      t.integer :airplane_id

      t.timestamps
    end
  end
end
