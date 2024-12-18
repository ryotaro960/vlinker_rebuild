class CommentsController < ApplicationController
  def create
    comment = Comment.create(comment_params)
    redirect_to post_path(comment.post_id)
  end

  private
  def comment_params
    params.require(:comment).permit(:content, :kidoku).merge(user_id: current_user.id, post_id: params[:post_id])
  end
end
