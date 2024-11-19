# 実行前にapplication_controllerのbefore_action :basic_authを無効にする
require 'rails_helper'

RSpec.describe "Posts", type: :request do
  before do
    @post = FactoryBot.create(:post)
  end
  describe 'GET #index' do
    it 'indexアクションにリクエストすると正常にレスポンスが返ってくる' do
      get root_path
      expect(response.status).to eq 200
    end
    
    it 'indexアクションにリクエストするとレスポンスに投稿済みのポストの画像URLが存在する' do
      get root_path
      expect(response.body).to include(@post.movie_main_thumbnail)
    end

    it 'indexアクションにリクエストするとレスポンスに投稿済みのポストのメッセージが存在する' do
      get root_path
      expect(response.body).to include(@post.message)
    end
    
    it 'indexアクションにリクエストするとレスポンスに投稿検索フォームが存在する' do
      get root_path
      expect(response.body).to include('動画検索')
    end
  end
    
  describe 'GET #show' do
    it 'showアクションにリクエストすると正常にレスポンスが返ってくる' do
      get post_path(@post)
      expect(response.status).to eq 200
    end
    
    it 'showアクションにリクエストするとレスポンスに投稿済みのイチオシ動画のコードが存在する' do
      get post_path(@post)
      expect(response.body).to include(@post.movie_main_embedded)
    end

    it 'showアクションにリクエストするとレスポンスに投稿済みの1個目のオススメ動画のコードが存在する' do
      get post_path(@post)
      expect(response.body).to include(@post.movie_left_embedded)
    end

    it 'showアクションにリクエストするとレスポンスに投稿済みの2個目のオススメ動画のコードが存在する' do
      get post_path(@post)
      expect(response.body).to include(@post.movie_right_embedded)
    end
    
    it 'showアクションにリクエストするとレスポンスに投稿済みの名前が存在する' do
      get post_path(@post)
      expect(response.body).to include(@post.talent_name)
    end

    it 'showアクションにリクエストするとレスポンスに投稿済みの所属事務所が存在する' do
      get post_path(@post)
      expect(response.body).to include(@post.talent_belongs)
    end

    it 'showアクションにリクエストするとレスポンスに投稿済みの公式チャンネルのURLが存在する' do
      get post_path(@post)
      expect(response.body).to include(@post.talent_channel)
    end

    it 'showアクションにリクエストするとレスポンスに投稿済みの公式XのURLが存在する' do
      get post_path(@post)
      expect(response.body).to include(@post.talent_x)
    end

    it 'showアクションにリクエストするとレスポンスに投稿済みの公式HPのURLが存在する' do
      get post_path(@post)
      expect(response.body).to include(@post.talent_hp)
    end

    it 'showアクションにリクエストするとレスポンスに投稿済みのメッセージが存在する' do
      get post_path(@post)
      expect(response.body).to include(@post.message)
    end

    it 'showアクションにリクエストするとレスポンスにコメント一覧表示部分が存在する' do
      get post_path(@post)
      expect(response.body).to include('件のコメント＞')
    end
  end
end
