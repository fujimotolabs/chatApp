class ChangeColumnToUser < ActiveRecord::Migration[7.0]
	# 変更内容
  def up
    change_column :users, :id, :string
  end

  # 変更前の状態
  def down
    change_column :users, :id, :integer
  end
end
