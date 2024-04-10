class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages, id: :uuid do |t|
      t.references :users, foreign_key: true, type: :uuid
      t.text :message

      t.timestamps
    end
  end
end
