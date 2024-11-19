require 'rails_helper'

RSpec.describe PostForm, type: :model do
  before do
    user = FactoryBot.create(:user)
    @post = FactoryBot.build(:post_form, user_id: user.id)
  end

  describe '投稿' do
    context '投稿できる場合' do
      it 'すべて入力されていれば保存できる' do
        expect(@post).to be_valid
      end
      
      it 'movie_leftとmovie_left_embeddedが空でも保存できる' do
        @post.movie_left = ''
        @post.movie_left_embedded = ''
        expect(@post).to be_valid
      end
      
      it 'movie_rightとmovie_right_embeddedが空でも保存できる' do
        @post.movie_right = ''
        @post.movie_right_embedded = ''
        expect(@post).to be_valid
      end

      it 'talent_belongsが空でも保存できる' do
        @post.talent_belongs = ''
        expect(@post).to be_valid
      end

      it 'talent_channelが空でも保存できる' do
        @post.talent_channel = ''
        expect(@post).to be_valid
      end

      it 'talent_xが空でも保存できる' do
        @post.talent_x = ''
        expect(@post).to be_valid
      end

      it 'talent_hpが空でも保存できる' do
        @post.talent_hp = ''
        expect(@post).to be_valid
      end
    
      it 'messageが空でも保存できる' do
        @post.message = ''
        expect(@post).to be_valid
      end

      it 'talent_imageが空でも保存できる' do
        @post.talent_image = nil
        expect(@post).to be_valid
      end
    end

    context '投稿できない場合' do
      it 'movie_mainが空では保存できない' do
        @post.movie_main = ''
        @post.valid?
        expect(@post.errors.full_messages).to include("イチオシ動画のURLを入力してください")
      end

      it 'movie_main_embeddedが空では保存できない' do
        @post.movie_main_embedded = ''
        @post.valid?
        expect(@post.errors.full_messages).to include("イチオシ動画のコードが取得できませんでした。")
      end

      it 'movie_main_thumbnailが空では保存できない' do
        @post.movie_main_thumbnail = ''
        @post.valid?
        expect(@post.errors.full_messages).to include("イチオシ動画のサムネイルが取得できませんでした。")
      end
  
      it 'talent_nameが空では保存できない' do
        @post.talent_name = ''
        @post.valid?
        expect(@post.errors.full_messages).to include("VTuberの名前を入力してください")
      end

      it "talent_nameが21文字以上では登録できない" do
        @post.talent_name = 'abcdefghijklmnopqrstu'
        @post.valid?
        expect(@post.errors.full_messages).to include("VTuberの名前は20文字以内で入力してください")
      end

      it "talent_belongsが31文字以上では登録できない" do
        @post.talent_belongs = Faker::String.random(length: 31)
        @post.valid?
        expect(@post.errors.full_messages).to include("所属事務所は30文字以内で入力してください")
      end

      it "messageが1000文字を超えては登録できない" do
        @post.message = Faker::String.random(length: 1001)
        @post.valid?
        expect(@post.errors.full_messages).to include("メッセージは1000文字以内で入力してください")
      end

      it 'userが紐付いていないと保存できない' do
        @post.user_id = nil
        @post.valid?
        expect(@post.errors.full_messages).to include("Userを入力してください")
      end
    end
  end
end