class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @posts = @user.posts.order("created_at DESC")
  end

  def update
    if current_user.update(user_params)
      redirect_to user_path(current_user.id)
    else
      render :show, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:comment, :user_image)
  end
end
