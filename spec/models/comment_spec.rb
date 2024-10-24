require 'rails_helper'

RSpec.describe Comment, type: :model do
  before do
    @comment = FactoryBot.build(:comment)
  end
  
  describe 'コメント機能' do
    context 'コメントできる場合' do
      it 'コメントが入力されていればコメントできる' do
        expect(@comment).to be_valid
      end
    end

    context 'コメントできない場合' do
      it 'contentが空ではコメントできない' do
        @comment.content = ''
        @comment.valid?
        expect(@comment.errors.full_messages).to include("Content can't be blank")
      end

      it 'userが紐づけされていなければコメントできない' do
        @comment.user = nil
        @comment.valid?
        expect(@comment.errors.full_messages).to include("User must exist")
      end

      it 'postが紐づけされていなければコメントできない' do
        @comment.post = nil
        @comment.valid?
        expect(@comment.errors.full_messages).to include("Post must exist")
      end
    end
  end
end
