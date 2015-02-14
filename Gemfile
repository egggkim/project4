source 'https://rubygems.org'

ruby '2.1.3'
gem 'rails', '4.2.0'
gem 'pg'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'bootstrap-sass', '~> 3.2.0'
gem 'bootstrap_form'
gem 'angular-rails-templates'
gem 'active_model_serializers'
gem 'angularjs-rails'
gem 'bcrypt'
gem 'bower-rails'
gem 'pry'

# calendar
gem 'fullcalendar-rails'
gem 'momentjs-rails'

# image uploads 
gem 'carrierwave'
gem 'carrierwave-postgresql'
gem 'fog'         # required for Amazon S3
gem 'mini_magick' # for post-upload image processing

group :development, :test do
  gem 'rspec-rails'
  gem 'guard'
  gem 'guard-rspec', require: false
  gem 'better_errors', '~> 2.0.0'
  gem 'binding_of_caller'
  gem 'factory_girl_rails'
  gem 'web-console', '~> 2.0'
  gem 'spring'
end

group :development do
  gem 'quiet_assets'
end

group :production do
  gem 'rails_12factor'
  gem 'thin'
  gem 'unicorn', '4.8.3'
end