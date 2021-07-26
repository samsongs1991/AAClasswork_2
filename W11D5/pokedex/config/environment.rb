# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# --------------------------------------------------------------
# Please note that this line allows you to convert snake_case
# to camelCase automatically but does not work the other way
# around. That means that you want to send your data snake_case
# everytime you are sending information to your backend.
Jbuilder.key_format camelize: :lower
# --------------------------------------------------------------