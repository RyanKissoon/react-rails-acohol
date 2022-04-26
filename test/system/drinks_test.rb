require "application_system_test_case"

class DrinksTest < ApplicationSystemTestCase
  setup do
    @drink = drinks(:one)
  end

  test "visiting the index" do
    visit drinks_url
    assert_selector "h1", text: "Drinks"
  end

  test "should create drink" do
    visit drinks_url
    click_on "New drink"

    fill_in "Brand", with: @drink.brand
    fill_in "Country", with: @drink.country
    fill_in "Quantity", with: @drink.quantity
    fill_in "Style", with: @drink.style
    click_on "Create Drink"

    assert_text "Drink was successfully created"
    click_on "Back"
  end

  test "should update Drink" do
    visit drink_url(@drink)
    click_on "Edit this drink", match: :first

    fill_in "Brand", with: @drink.brand
    fill_in "Country", with: @drink.country
    fill_in "Quantity", with: @drink.quantity
    fill_in "Style", with: @drink.style
    click_on "Update Drink"

    assert_text "Drink was successfully updated"
    click_on "Back"
  end

  test "should destroy Drink" do
    visit drink_url(@drink)
    click_on "Destroy this drink", match: :first

    assert_text "Drink was successfully destroyed"
  end
end
