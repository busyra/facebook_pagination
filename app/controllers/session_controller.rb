class SessionController < ApplicationController

  def new
  end

  def show

      redirect_to root_path unless session['auth']

      @auth = session['auth']
      @graph = Koala::Facebook::API.new @auth['credentials']['token']

      #determine which page to start at
      current_page =  Integer(params[:page]) rescue 1
      per_page = 5
      offset = current_page * per_page - per_page

      @page = current_page

      @stories = @graph.get_object("me/feed?limit=#{per_page}&offset=#{offset}")

      if request.xhr?
      #to render only story and not layout
      render :_stories, layout: false
      end

  end

  def create
      session['auth'] = request.env['omniauth.auth']
      redirect_to session_show_path
  end

  def destroy
      session['auth'] = nil
      redirect_to root_path
  end

end
