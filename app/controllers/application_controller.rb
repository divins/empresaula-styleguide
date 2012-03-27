class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :stub_model

  private

  def stub_model
    return @stub_model if @stub_model
    @stub_model ||= Stub.new.tap{ |m| m.valid? }
  end
end
