class Country < ApplicationRecord
  belongs_to :countries, class_name: "Country", foreign_key: "id"
end
