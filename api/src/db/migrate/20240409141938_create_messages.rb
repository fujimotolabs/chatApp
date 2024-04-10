class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages, id: :uuid do |t|
      t.string :message_id
      t.text :message
      t.datetime :create_at
      t.datetime :update_at

      t.timestamps
    end
  end
end
