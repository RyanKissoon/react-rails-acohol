class Drink < ApplicationRecord
  has_many :countries, class_name: "Country", foreign_key: "country"
  has_many :styles, class_name: "Style", foreign_key: "style"
end
