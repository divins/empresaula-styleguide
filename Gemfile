source 'https://rubygems.org'

gem 'railties'
gem 'activesupport'
gem 'actionpack'
gem 'activemodel'
gem 'tzinfo'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'slim'

group :development do
  gem 'heroku'
end

gem 'simple_form'

if ENV['GIT_ASSETS']
  gem 'empresaula-assets', git: 'git://github.com/empresaula/empresaula-assets.git'
else
  gem 'empresaula-assets', path: '../empresaula-assets'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer'

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'
