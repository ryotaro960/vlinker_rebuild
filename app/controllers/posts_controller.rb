class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :search]
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :move_to_index, only: [:edit, :destroy]

  def index
    if params[:movie_tag]
      @posts = Post.search_by_movietag(params[:movie_tag]).order('created_at DESC')
      @pagetitle = "動画タグ「#{params[:movie_tag]}」で検索"
    elsif params[:talent_tag]
      @posts = Post.search_by_talenttag(params[:talent_tag]).includes(:movie_tags).order('created_at DESC')
      @pagetitle = "VTuberタグ「#{params[:talent_tag]}」で検索"
    elsif params[:talent_name]
      @posts = Post.where(posts: { talent_name: params[:talent_name] }).includes(:movie_tags).order('created_at DESC')
      @pagetitle = "VTuber名「#{params[:talent_name]}」で検索"
    elsif params[:talent_belongs]
      @posts = Post.where(posts: { talent_belongs: params[:talent_belongs] }).includes(:movie_tags).order('created_at DESC')
      @pagetitle = "VTuberの所属事務所「#{params[:talent_belongs]}」で検索"
    else
      @posts = Post.includes(:movie_tags).order('created_at DESC')
      @pagetitle = 'トップページ'
    end
  end

  def new
    posts = Post.where(posts: { user_id: current_user.id })
    if posts.length >= 15
        redirect_back(fallback_location: root_path)
      flash[:alert] = '投稿は一つのアカウントにつき15件まで可能です。'
    end

    @post_form = PostForm.new
    @post_form.movie_tag_name = '`/$`/$'
    @post_form.talent_tag_name = '`/$`/$'
  end

  def create
    @post_form = PostForm.new(post_form_params)
    if @post_form.valid?
      @post_form.save
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @comment = Comment.new
    @comments = @post.comments.includes(:user)
  end

  def edit
    post_attributes = @post.attributes
    @post_form = PostForm.new(post_attributes)
    @post_form.movie_tag_name = "#{@post.movie_tags.first&.movie_tag_name}`/$#{@post.movie_tags.second&.movie_tag_name}`/$#{@post.movie_tags.third&.movie_tag_name}"
    @post_form.talent_tag_name = "#{@post.talent_tags.first&.talent_tag_name}`/$#{@post.talent_tags.second&.talent_tag_name}`/$#{@post.talent_tags.third&.talent_tag_name}"
  end

  def update
    @post_form = PostForm.new(post_form_params)
    if @post_form.valid?
      @post_form.update(post_form_params, @post)
      redirect_to post_path(@post.id)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    redirect_to root_path
  end

  def search
    @q = Post.ransack(params[:q])
    @posts = @q.result.includes(:movie_tags).order('created_at DESC')
  end
  
  private
  
  def set_post
    @post = Post.find(params[:id])
  end

  def move_to_index
    if current_user.id != @post.user.id
      redirect_to action: :index
    end
  end

  def post_form_params
    params.require(:post_form).permit(:movie_main, :movie_main_embedded, :movie_main_thumbnail, :movie_left, :movie_left_embedded, :movie_right, :movie_right_embedded, :talent_name, :talent_belongs, :talent_channel, :talent_x, :talent_hp, :message, :movie_tag_name, :talent_tag_name, :talent_image).merge(user_id: current_user.id)
  end

end
